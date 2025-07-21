'use server';

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

/**
 * Sync the current Clerk user with the local DB, and always return
 * the user object **with** _count (followers/following/posts).
 */
export async function syncUser() {
    try {
        const { userId } = await auth();
        const user = await currentUser();
        if (!userId || !user) return null;

        // 1. Check by clerkId
        let existingUser = await prisma.user.findUnique({
            where: { clerkId: userId },
            include: {
                _count: {
                    select: { posts: true, followers: true, following: true }
                }
            }
        });
        if (existingUser) return existingUser;

        // 2. Check by email
        const email = user.emailAddresses[0].emailAddress;
        let userByEmail = await prisma.user.findUnique({
            where: { email },
            include: {
                _count: {
                    select: { posts: true, followers: true, following: true }
                }
            }
        });
        if (userByEmail) {
            // If found, update this record to set clerkId (link)
            await prisma.user.update({
                where: { email },
                data: { clerkId: userId }
            });
            // Fetch again with updated clerkId:
            existingUser = await prisma.user.findUnique({
                where: { clerkId: userId },
                include: {
                    _count: {
                        select: { posts: true, followers: true, following: true }
                    }
                }
            });
            return existingUser;
        }

        // 3. If neither, create new user
        const dbUser = await prisma.user.create({
            data: {
                clerkId: userId,
                name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
                username: user.username ?? email.split('@')[0],
                email: email,
                image: user.imageUrl,
            }
        });

        // Fetch with _count for consistency
        const userWithCount = await prisma.user.findUnique({
            where: { id: dbUser.id },
            include: {
                _count: {
                    select: { posts: true, followers: true, following: true }
                }
            }
        });

        return userWithCount;
    } catch (error) {
        console.log("Error in syncUser", error);
        return null;
    }
}

/**
 * Get a user by Clerk ID, always returns full data with _count.
 */
export async function getUserByClerkId(clerkId: string) {
    return prisma.user.findUnique({
        where: { clerkId },
        include: {
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true,
                },
            },
        },
    });
}

/**
 * Get current user's DB user ID (auto-sync if record not present).
 * Always returns the user's DB id if logged in, or null.
 */
export async function getDbUserId() {
    const { userId: clerkId } = await auth();
    if (!clerkId) return null;

    let user = await getUserByClerkId(clerkId);
    if (!user) {
        user = await syncUser();
    }
    if (!user) return null;

    return user.id;
}

/**
 * Get up to 3 random users not already followed by the current user.
 */
export async function getRandomUsers() {
    try {
        const userId = await getDbUserId();
        if (!userId) return [];
        const randomUsers = await prisma.user.findMany({
            where: {
                AND: [
                    { NOT: { id: userId } },
                    {
                        NOT: {
                            followers: {
                                some: { followerId: userId },
                            },
                        },
                    },
                ],
            },
            select: {
                id: true,
                name: true,
                username: true,
                image: true,
                _count: {
                    select: { followers: true }
                }
            },
            take: 3,
        });
        return randomUsers;
    } catch (error) {
        console.log("Error fetching random users", error);
        return [];
    }
}

/**
 * Follow/unfollow a user, with notification.
 */
export async function toggleFollow(targetUserId: string) {
    try {
        const userId = await getDbUserId();
        if (!userId) return { success: false, error: "Not authenticated" };
        if (targetUserId === userId) return { success: false, error: "You cannot follow yourself" };

        const existingFollow = await prisma.follows.findUnique({
            where: {
                followerId_followingId: {
                    followerId: userId,
                    followingId: targetUserId,
                }
            }
        });

        if (existingFollow) {
            await prisma.follows.delete({
                where: {
                    followerId_followingId: {
                        followerId: userId,
                        followingId: targetUserId,
                    },
                },
            });
        } else {
            await prisma.$transaction([
                prisma.follows.create({
                    data: {
                        followerId: userId,
                        followingId: targetUserId,
                    },
                }),
                prisma.notification.create({
                    data: {
                        type: "FOLLOW",
                        userId: targetUserId,
                        creatorId: userId,
                    },
                }),
            ]);
        }

        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.log("Error in toggleFollow", error);
        return { success: false, error: "Error toggling follow" };
    }
}
