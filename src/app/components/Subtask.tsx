"use client";
import React, { useState, useEffect } from "react";

const Subtask = ({
    title,
    id,
    status,
    updateSubtaskStatus,
}: {
    title: string;
    id: string;
    status: string;
    updateSubtaskStatus: (id: string, newStatus: string) => Promise<void>; // Server action for updating status
}) => {
    const [ticked, setTicked] = useState(false);

    // Set the initial state based on the status
    useEffect(() => {
        setTicked(status === "Done");
    }, [status]);

    const handleTicked = async () => {
        const newStatus = !ticked ? "Done" : "To-Do"; // Toggle status
        setTicked((prev) => !prev);

        // Save changes to the database through the server action
        try {
            await updateSubtaskStatus(id, newStatus);
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    return (
        <div key={id} className="flex items-center justify-between">
            <div className={`${ticked ? "line-through" : "no-underline"} w-1/3`}>{title}</div>
            <div className="w-1/3">{status}</div>
            <div className="w-1/3">
                <input

                    onClick={handleTicked}
                    checked={ticked} // Sync the checkbox with the state
                    onChange={() => { }} // Avoid React warnings
                    className="accent-[#f6c75c] h-[30px] w-[20px]  "
                    type="checkbox"
                />
            </div>

        </div>
    );
};

export default Subtask;
