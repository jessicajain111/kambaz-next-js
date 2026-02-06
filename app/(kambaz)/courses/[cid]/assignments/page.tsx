"use client";
import { ListGroup, Form, Button, InputGroup } from "react-bootstrap";
import { BsSearch, BsPlusLg, BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      {/* Top row: Search + Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text className="bg-white">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search..."
            className="border-start-0"
          />
        </InputGroup>

        {/* Right buttons */}
        <div>
          <Button variant="secondary" className="me-2">
            <BsPlusLg className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <BsPlusLg className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignments List */}
      <ListGroup className="rounded-0">
        {/* ASSIGNMENTS Group Header */}
        <ListGroup.Item className="p-0 border-0 mb-3">
          <div className="bg-secondary p-3 d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-4" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div>
              <span className="me-3">40% of Total</span>
              <BsPlusLg className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {/* Assignment Items */}
          <ListGroup className="border-0">
            {/* A1 */}
            <ListGroup.Item className="wd-assignment-item border-start border-success border-4 p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-4 text-muted" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link href="/courses/1234/assignments/A1" className="fw-bold text-decoration-none text-dark">
                    A1
                  </Link>
                  <div className="text-danger small">
                    Multiple Modules | <span className="text-muted">Not available until</span> May 6 at 12:00am | <span className="text-muted">Due</span> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>

            {/* A2 */}
            <ListGroup.Item className="wd-assignment-item border-start border-success border-4 p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-4 text-muted" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link href="/courses/1234/assignments/A2" className="fw-bold text-decoration-none text-dark">
                    A2
                  </Link>
                  <div className="text-danger small">
                    Multiple Modules | <span className="text-muted">Not available until</span> May 13 at 12:00am | <span className="text-muted">Due</span> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>

            {/* A3 */}
            <ListGroup.Item className="wd-assignment-item border-start border-success border-4 p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-4 text-muted" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link href="/courses/1234/assignments/A3" className="fw-bold text-decoration-none text-dark">
                    A3
                  </Link>
                  <div className="text-danger small">
                    Multiple Modules | <span className="text-muted">Not available until</span> May 20 at 12:00am | <span className="text-muted">Due</span> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}