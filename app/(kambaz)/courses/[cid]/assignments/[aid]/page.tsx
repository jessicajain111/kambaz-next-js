"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "@/app/(kambaz)/store";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const existingAssignment = (assignments as any[]).find((a) => a._id === aid);

  const [assignment, setAssignment] = useState<any>({
    _id: aid === "new" ? "" : aid,
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (existingAssignment) setAssignment(existingAssignment);
  }, []);

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" className="form-control mb-2"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />

      <textarea id="wd-description" className="form-control mb-2" rows={10}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />

      <table>
        <tbody>
          <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td>
              <input id="wd-points" type="number" className="form-control"
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} />
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-due-date">Due</label></td>
            <td>
              <input type="date" id="wd-due-date" className="form-control"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-available-from">Available from</label></td>
            <td>
              <input type="date" id="wd-available-from" className="form-control"
                value={assignment.availableDate}
                onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-available-until">Until</label></td>
            <td>
              <input type="date" id="wd-available-until" className="form-control"
                value={assignment.availableUntil}
                onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <button className="btn btn-secondary me-2"
        onClick={() => router.push(`/courses/${cid}/assignments`)}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}