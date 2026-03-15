"use client";
import { useState } from "react";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName, setModuleName, addModule,
}: {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);

  return (
    <div id="wd-modules-controls"
      className="d-flex align-items-center justify-content-end gap-2 mb-3">
      <button className="btn btn-secondary d-flex align-items-center gap-1">
        <FaCheckCircle className="text-success" />
        Publish All
        <span>▼</span>
      </button>
      <button className="btn btn-danger d-flex align-items-center gap-1"
        onClick={() => setShow(true)}>
        <FaPlus />
        Module
      </button>
      <IoEllipsisVertical className="fs-4" />

      <ModuleEditor
        show={show}
        handleClose={() => setShow(false)}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}