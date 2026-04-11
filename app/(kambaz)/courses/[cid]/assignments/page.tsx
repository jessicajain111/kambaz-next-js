"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { RootState } from "@/app/(kambaz)/store";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import * as client from "../../client";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchAssignments = useCallback(async () => {
    if (!cid) return;
    const list = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(list));
  }, [cid, dispatch]);

  useEffect(() => {
    void fetchAssignments();
  }, [fetchAssignments]);

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (selectedId) {
      await client.deleteAssignment(selectedId);
      dispatch(deleteAssignment(selectedId));
    }
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <input className="form-control w-25"
          placeholder="Search for Assignment" />
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-secondary">+ Group</button>
          <button className="btn btn-danger"
            onClick={() => router.push(`/courses/${cid}/assignments/new`)}>
            + Assignment
          </button>
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <hr />

      {showConfirm && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary"
                  onClick={() => setShowConfirm(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="list-group-item p-0">
          <div className="d-flex align-items-center justify-content-between p-3 bg-secondary">
            <div className="d-flex align-items-center gap-2">
              <BsGripVertical className="fs-3" />
              <span>▼</span>
              <b>ASSIGNMENTS</b>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="border border-dark rounded-pill px-2 py-1"
                style={{ fontSize: "12px" }}>
                40% of Total
              </span>
              <span className="fs-4">+</span>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="list-group rounded-0">
            {(assignments as any[]).map((assignment: any) => (
              <li key={assignment._id}
                className="list-group-item d-flex align-items-center justify-content-between p-3"
                style={{ borderLeft: "3px solid green" }}>
                <div className="d-flex align-items-center gap-2">
                  <BsGripVertical className="fs-3 text-secondary" />
                  <BsFileText className="fs-4 text-secondary" />
                  <div>
                    <Link href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="fw-bold text-dark text-decoration-none">
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="text-danger small">Multiple Modules</span>
                    <span className="text-muted small">
                      {" "}| Due {assignment.dueDate} | {assignment.points} pts
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <FaCheckCircle className="text-success fs-5" />
                  <FaTrash className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteClick(assignment._id)} />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}