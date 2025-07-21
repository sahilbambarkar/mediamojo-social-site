'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({ userId }: { userId: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const handleFollow = async () => {
        setIsLoading(true);

        try {
            await toggleFollow(userId);
            toast.success("User followed successfully");
        } catch (error) {
            toast.error("Error following user");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Button
            size={"sm"}
            variant={"secondary"}
            className="w-20"
            onClick={handleFollow}
            disabled={isLoading}
        >
            {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
        </Button>
    )
}

export default FollowButton