"use client";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});

  const fetchAssignment = async () => {
    const a = await client.fetchAssignment();
    setAssignment(a);
  };

  const updateTitle = async (title: string) => {
    const updated = await client.updateTitle(title);
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <FormControl defaultValue={assignment.title} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <button className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}