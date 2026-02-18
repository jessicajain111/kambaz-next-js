"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();

  const assignments = (db as any).assignments
    ?.filter((a: any) => a.course === cid) ?? [];

  return (
    <div id="wd-assignments">
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
          </div>

          <ListGroup className="rounded-0">
            {assignments.map((a: any) => (
              <ListGroupItem key={a._id} className="p-3 d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <FaFileAlt className="me-2 mt-1" />

                <div className="flex-grow-1">
                  <Link
                    href={`/courses/${cid}/assignments/${a._id}`}
                    className="text-decoration-none"
                  >
                    {a.title}
                  </Link>
                  <div className="text-muted small">
                    {a.module} | Not available until {a.available} | Due {a.due} |{" "}
                    {a.points} pts
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
