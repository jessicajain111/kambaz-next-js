"use client";
import { ListGroup, Form, Button, InputGroup } from "react-bootstrap";
import { BsSearch, BsPlusLg, BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      {/* Top row: title + right‑floated buttons */}
      <div className="mb-3">
        <h2 className="d-inline-block me-3">Assignments</h2>

        {/* Right‑floated buttons */}
        <div className="float-end">
          <Button variant="secondary" className="me-2">
            <BsPlusLg className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <BsPlusLg className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Search bar row */}
      <div className="clearfix mb-3">
        <InputGroup className="w-50">
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for Assignment"
            className="text-start"
          />
        </InputGroup>
      </div>

      {/* Assignment groups – reuse Modules styling ideas */}
      <ListGroup className="rounded-0" id="wd-assignments-list">
        {/* Group 1: Assignments 40% */}
        <ListGroup.Item className="p-0 mb-4 fs-5 border-gray wd-assignment-group">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-4" />
            Assignments 40%
            <div className="float-end">
              <FaCheckCircle className="text-success me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ListGroup className="wd-assignments-items rounded-0">
            <ListGroup.Item className="wd-assignment-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-4" />
              <span className="fw-bold text-primary me-2">A1</span>
              <span className="fw-bold">React JS Assignment</span>
              <div className="text-muted small ms-4">
                Due Jan 30 at 11:59pm · 100 pts
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-4" />
              <span className="fw-bold text-primary me-2">A2</span>
              <span className="fw-bold">Node JS Assignment</span>
              <div className="text-muted small ms-4">
                Due Feb 6 at 11:59pm · 100 pts
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* Group 2: Quizzes 10% (example) */}
        <ListGroup.Item className="p-0 mb-4 fs-5 border-gray wd-assignment-group">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-4" />
            Quizzes 10%
            <div className="float-end">
              <FaCheckCircle className="text-success me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ListGroup className="wd-assignments-items rounded-0">
            <ListGroup.Item className="wd-assignment-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-4" />
              <span className="fw-bold text-primary me-2">Q1</span>
              <span className="fw-bold">HTML & CSS Quiz</span>
              <div className="text-muted small ms-4">
                Due Feb 3 at 11:59pm · 20 pts
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
