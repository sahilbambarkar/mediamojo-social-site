"use client";
import React from "react";
import { SignInButton, SignUpButton, UserButton, SignOutButton,} from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

type SignButtonProps<T extends React.ElementType> = React.ComponentProps<T> & {buttonLabel?: string;}

export function ThemedSignInButton({
    buttonLabel = "Sign In",
    ...props
}: SignButtonProps<typeof SignInButton>) {
    const { theme } = useTheme();

    const appearance = {
        baseTheme: theme === "dark" ? dark : undefined,
        elements: {
            modal: theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black",
        },
        variables: {
            colorPrimary: theme === "dark" ? "#82cfff" : "#106ba3",
            colorBackground: theme === "dark" ? "#121212" : "#ffffff",
            colorText: theme === "dark" ? "#ffffff" : "#000000",
        },
    };

    return (
        <SignInButton mode="modal" appearance={appearance} {...props}>
            <Button variant="default" className="w-full">{buttonLabel}</Button>
        </SignInButton>
    );
}

export function ThemedSignUpButton({
    buttonLabel = "Sign Up",
    ...props
}: SignButtonProps<typeof SignUpButton>) {
    const { theme } = useTheme();

    const appearance = {
        baseTheme: theme === "dark" ? dark : undefined,
        elements: {
            modal: theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black",
        },
        variables: {
            colorPrimary: theme === "dark" ? "#82cfff" : "#106ba3",
            colorBackground: theme === "dark" ? "#121212" : "#ffffff",
            colorText: theme === "dark" ? "#ffffff" : "#000000",
        },
    };

    return (
        <SignUpButton mode="modal" appearance={appearance} {...props}>
            <Button variant="secondary" className="w-full mt-2">{buttonLabel}</Button>
        </SignUpButton>
    );
}

export function ThemedUserButton(
    props: React.ComponentProps<typeof UserButton>
) {
    const { theme } = useTheme();

    const appearance = {
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
            colorPrimary: theme === "dark" ? "#82cfff" : "#106ba3",
        },
    };

    return <UserButton appearance={appearance} {...props} />;
}

export function ThemedSignOutButton(
    props: React.ComponentProps<typeof SignOutButton>
) {
    return (
        <SignOutButton {...props}>
            <Button variant="ghost" className="flex items-center gap-3 justify-start w-full">
                <LogOutIcon className="w-4 h-4" />
                Logout
            </Button>
        </SignOutButton>
    );
}
