"use client";

import React, { useState, useTransition } from "react";

const HandleInvitation = ({
    token,
    onStatusChange,
}: {
    token: string;
    onStatusChange: (token: string, status: string) => Promise<void>;
}) => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    const handleStatusChange = (status: string) => {
        setError(null); // Clear previous errors
        startTransition(async () => {
            try {
                console.log("this is the token" + token)
                console.log(status)
                await onStatusChange(token, status);
            } catch (err) {
                setError("Failed to update invitation status. Please try again.");
            }
        });
    };

    return (
        <div className="flex flex-col gap-4 items-center">
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                    onClick={() => handleStatusChange("Accepted")}
                    disabled={isPending}
                >
                    {isPending ? "Processing..." : "Accept"}
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                    onClick={() => handleStatusChange("Rejected")}
                    disabled={isPending}
                >
                    {isPending ? "Processing..." : "Reject"}
                </button>
            </div>
        </div>
    );
};

export default HandleInvitation;
