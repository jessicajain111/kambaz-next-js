"use client";

import { Form, Row, Col, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EditAssignment() {
  return (
    <div id="wd-edit-assignment" className="p-4">      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Edit Assignment</h2>
        <div>
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </div>

      <div className="border rounded p-4 bg-white">
        <Form>
          <Form.Group className="mb-3" controlId="wd-assignment-name">
            <Form.Label className="fw-bold">Assignment Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue="A1 - ENV + HTML"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="wd-assignment-description">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Describe the assignment here..."
            />
          </Form.Group>

          <Row className="mb-3 align-items-center">
            <Form.Label
              column
              sm={3}
              className="text-sm-end fw-bold"
            >
              Points
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                min={0}
                defaultValue={100}
                className="w-25"
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Form.Label
              column
              sm={3}
              className="text-sm-end fw-bold"
            >
              Assignment Group
            </Form.Label>
            <Col sm={9}>
              <Form.Select className="w-50">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Form.Label
              column
              sm={3}
              className="text-sm-end fw-bold"
            >
              Display Grade as
            </Form.Label>
            <Col sm={9}>
              <Form.Select className="w-50">
                <option>Points</option>
                <option>Percentage</option>
                <option>Complete/Incomplete</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Form.Label
              column
              sm={3}
              className="text-sm-end fw-bold"
            >
              Submission Type
            </Form.Label>
            <Col sm={9}>
              <div className="border rounded p-3">
                <Form.Select className="mb-3 w-50">
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </Form.Select>
                <div className="fw-bold mb-2">Online Entry Options</div>
                <Form.Check
                  type="checkbox"
                  label="Text Entry"
                  className="mb-1"
                  defaultChecked
                />
                <Form.Check
                  type="checkbox"
                  label="Website URL"
                  className="mb-1"
                />
                <Form.Check
                  type="checkbox"
                  label="Media Recordings"
                  className="mb-1"
                />
                <Form.Check
                  type="checkbox"
                  label="File Uploads"
                />
              </div>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Form.Label
              column
              sm={3}
              className="text-sm-end fw-bold"
            >
              Assign
            </Form.Label>
            <Col sm={9}>
              <div className="border rounded p-3">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Due</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="datetime-local"
                      className="me-2 w-50"
                    />
                    <FaRegCalendarAlt className="text-muted" />
                  </div>
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Available from</Form.Label>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Until</Form.Label>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-end">
                  <Button variant="light" size="sm" className="border">
                    + Add
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-4 text-end">
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
