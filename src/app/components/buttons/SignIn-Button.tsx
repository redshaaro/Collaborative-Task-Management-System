"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/";

    const handleSignIn = async () => {
        await signIn("google", { callbackUrl: redirectTo });
    };

    return (
        <button type="button" onClick={handleSignIn}>
            Login
        </button>
    );
}
