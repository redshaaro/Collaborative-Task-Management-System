"use client";
import React, { useState } from "react";
import Button from "./Button";
import Modal from "../Modal";
import UpdateTaskForm from "../Forms/UpdateTaskForm";
type categories = {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;


}[]

const EditButton = ({ id, name, categories, }: { id: string, name: string, categories: categories }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen((prev) => !prev);


  return (
    <>
      {/* Edit Button */}
      <Button text="Edit" type="button" onClick={handleOpenModal} />

      {/* Modal for Editing Task */}
      {isModalOpen && (
        <Modal onClose={handleOpenModal}>
          <UpdateTaskForm id={id} name={name} categories={categories} handleOpenModal={handleOpenModal} ></UpdateTaskForm>

        </Modal>
      )}
    </>
  );
};

export default EditButton;
