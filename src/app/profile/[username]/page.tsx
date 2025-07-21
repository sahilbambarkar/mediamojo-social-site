import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import { getDbUserId } from "@/actions/user.action";

export async function generateMetadata({ params }: { params: { username: string } }) {
    const user = await getProfileByUsername(params.username);
    if (!user) return;

    return {
        title: `${user.name ?? user.username}`,
        description: user.bio || `Check out ${user.username}'s profile.`,
    };
}

async function ProfilePageServer({params}: {params: {username: string}}) {
    const user = await getProfileByUsername(params.username);
    const dbUserId = (await getDbUserId())!;

    if (!user) notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id),
    ]);
    return (
        <ProfilePageClient
            user={user}
            dbUserId={dbUserId}
            posts={posts}
            likedPosts={likedPosts}
            isFollowing={isCurrentUserFollowing}
        />
    )
}

export default ProfilePageServer