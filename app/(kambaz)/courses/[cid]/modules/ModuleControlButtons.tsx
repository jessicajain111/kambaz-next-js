"use client";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function GreenCheckmark() {
  return <span style={{ color: "green" }}>✔</span>;
}

export default function ModuleControlButtons({
  moduleId, deleteModule, editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      <FaPencil onClick={() => editModule(moduleId)}
        className="text-primary" style={{ cursor: "pointer" }} />
      <FaTrash className="text-danger"
        onClick={() => deleteModule(moduleId)} style={{ cursor: "pointer" }} />
      <GreenCheckmark />
      <BsPlus className="fs-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}