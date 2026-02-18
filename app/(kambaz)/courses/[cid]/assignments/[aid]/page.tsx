"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = (db.assignments as any[]).find((a) => a._id === aid);

  return (
    <div id="wd-edit-assignment" className="p-4">
      <div className="border rounded p-4 bg-white">
        <Form>
          <Form.Group className="mb-3" controlId="wd-assignment-name">
            <Form.Label className="fw-bold">Assignment Name</Form.Label>
            <Form.Control type="text" defaultValue={assignment?.title} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="wd-assignment-description">
            <Form.Control as="textarea" rows={5} defaultValue={assignment?.description} />
          </Form.Group>

          <Row className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-sm-end fw-bold">Points</Form.Label>
            <Col sm={9}>
              <Form.Control type="number" min={0} defaultValue={assignment?.points} className="w-25" />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-sm-end fw-bold">Assignment Group</Form.Label>
            <Col sm={9}>
              <Form.Select className="w-50">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-sm-end fw-bold">Display Grade as</Form.Label>
            <Col sm={9}>
              <Form.Select className="w-50">
                <option>Points</option>
                <option>Percentage</option>
                <option>Complete/Incomplete</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Form.Label column sm={3} className="text-sm-end fw-bold">Submission Type</Form.Label>
            <Col sm={9}>
              <div className="border rounded p-3">
                <Form.Select className="mb-3 w-50">
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </Form.Select>
                <div className="fw-bold mb-2">Online Entry Options</div>
                <Form.Check type="checkbox" label="Text Entry" className="mb-1" defaultChecked />
                <Form.Check type="checkbox" label="Website URL" className="mb-1" />
                <Form.Check type="checkbox" label="Media Recordings" className="mb-1" />
                <Form.Check type="checkbox" label="File Uploads" />
              </div>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Form.Label column sm={3} className="text-sm-end fw-bold">Assign</Form.Label>
            <Col sm={9}>
              <div className="border rounded p-3">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Due</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control type="date" className="me-2 w-50"
                      defaultValue={assignment?.dueDate} />
                    <FaRegCalendarAlt className="text-muted" />
                  </div>
                </Form.Group>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Available from</Form.Label>
                      <Form.Control type="date" defaultValue={assignment?.availableDate} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Until</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className="mt-4 text-end">
            <Link href={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">
              Cancel
            </Link>
            <Link href={`/courses/${cid}/assignments`} className="btn btn-danger">
              Save
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}