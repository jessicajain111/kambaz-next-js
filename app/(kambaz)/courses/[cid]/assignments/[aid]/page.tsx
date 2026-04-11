"use client";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { useState, useEffect } from "react";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState<any>({
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableDate: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (aid === "new" && cid) {
      setAssignment((prev: any) => ({ ...prev, course: cid }));
    }
  }, [cid, aid]);

  useEffect(() => {
    if (aid === "new" || !cid) return;
    const load = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      const existing = assignments.find((a: any) => a._id === aid);
      if (existing) setAssignment(existing);
    };
    void load();
  }, [cid, aid]);

  const handleSave = async () => {
    if (aid === "new") {
      const newAssignment = await client.createAssignment(
        cid as string, { ...assignment, course: cid });
      dispatch(addAssignment(newAssignment));
    } else {
      const updated = await client.updateAssignment(assignment);
      dispatch(updateAssignment(updated));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      </div>

      <div className="mb-3">
        <textarea id="wd-description" className="form-control" rows={10}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-3 text-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-9">
          <input id="wd-points" type="number" className="form-control"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-3 text-end">
          <label className="form-label">Assign</label>
        </div>
        <div className="col-9">
          <div className="border rounded p-3">
            <div className="mb-3">
              <label className="form-label fw-bold">Assign to</label>
              <input className="form-control" placeholder="Everyone" />
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
              <input type="date" id="wd-due-date" className="form-control"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                <input type="date" id="wd-available-from" className="form-control"
                  value={assignment.availableDate}
                  onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
              </div>
              <div className="col-6">
                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                <input type="date" id="wd-available-until" className="form-control"
                  value={assignment.availableUntil}
                  onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-secondary"
          onClick={() => router.push(`/courses/${cid}/assignments`)}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}