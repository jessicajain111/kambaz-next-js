"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = (db.assignments as any[]).filter((a) => a.course === cid);

  return (
    <div id="wd-assignments">
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <div className="wd-title">ASSIGNMENTS</div>
          <ul>
            {assignments.map((assignment: any) => (
              <li key={assignment._id}>
                <Link href={`/courses/${cid}/assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <br />
                <span>Multiple Modules | Not available until {assignment.availableDate} | </span>
                <span>Due {assignment.dueDate} | {assignment.points} pts</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}