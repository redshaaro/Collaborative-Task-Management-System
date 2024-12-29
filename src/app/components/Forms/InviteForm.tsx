// ClientInvitations.tsx (Client Component)
'use client';

import React from 'react';
import { createInvitation } from '@/app/actions/actions';  // Action for sending invitations.

const InviteForm = ({ tasks }: { tasks: { id: string; title: string }[] }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const taskId = formData.get('taskId') as string;

    // Get the task title based on the selected taskId.
    const selectedTask = tasks.find((task) => task.id === taskId);
    const taskTitle = selectedTask?.title || 'Unknown Task';

    // Call the action to send the invitation.
    await createInvitation({ email, taskId, taskTitle });
    alert(`Invitation sent for task: ${taskTitle}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Recipient Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full border rounded px-2 py-1"
          placeholder="Enter recipient's email"
        />
      </div>

      {/* Task Selector */}
      <div className="mb-4">
        <label htmlFor="taskId" className="block text-sm font-medium">
          Select a Task:
        </label>
        <select name="taskId" id="taskId" required className="w-full border rounded px-2 py-1">
          <option value="">Select a task</option>
          {tasks.map((task) => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Invitation
      </button>
    </form>
  );
};

export default InviteForm;
