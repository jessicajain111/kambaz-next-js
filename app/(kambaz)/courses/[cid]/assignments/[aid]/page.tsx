"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const assignment = (db as any).assignments?.find(
    (a: any) => a._id === aid && a.course === cid
  );

  return (
    <div id="wd-assignment-editor">
      <h2>{assignment?.title}</h2>

      <div>
        <b>Description</b>
        <div>{assignment?.description}</div>
      </div>

      <div className="mt-3">
        <div>
          <b>Points</b> {assignment?.points}
        </div>
        <div>
          <b>Due</b> {assignment?.due}
        </div>
        <div>
          <b>Available</b> {assignment?.available}
        </div>
      </div>

      <div className="mt-4">
        <Link className="btn btn-secondary me-2" href={`/courses/${cid}/assignments`}>
          Cancel
        </Link>
        <Link className="btn btn-danger" href={`/courses/${cid}/assignments`}>
          Save
        </Link>
      </div>
    </div>
  );
}
