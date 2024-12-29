// Invitations.tsx (Server Component)
import React from 'react';
import { getTasks } from '../lib/tasks';
import InviteForm from '../components/Forms/InviteForm';


const Invitations = async () => {
  const tasks = await getTasks(); // Fetch tasks on the server.

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Send an Invitation</h2>
      <InviteForm tasks={tasks} />
    </div>
  );
};

export default Invitations;
