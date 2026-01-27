"use client";
import { Table, Dropdown, Badge } from "react-bootstrap";
import { BsFilter, BsChevronDown, BsExclamationTriangle } from "react-icons/bs";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export default function Grades() {
  return (
    <div id="wd-grades" className="p-4">
      {/* Header with title and right-floated buttons */}
      <div className="mb-4">
        <h2 className="d-inline-block me-3">Grades</h2>
        <div className="float-end">
          <Dropdown className="me-2 d-inline-block">
            <Dropdown.Toggle variant="outline-secondary" className="d-flex align-items-center">
              <BsFilter className="me-1" /> Filter
              <BsChevronDown className="ms-1" />
            </Dropdown.Toggle>
          </Dropdown>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            Learning Mastery
          </button>
        </div>
      </div>

      {/* Total grade summary */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card border-0 bg-light">
            <div className="card-body text-center p-4">
              <div className="h1 text-success mb-2">95%</div>
              <div className="text-muted">Final Grade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Groups Table */}
      <Table hover responsive className="mb-4">
        <thead>
          <tr className="table-secondary">
            <th>
              <div className="d-flex align-items-center">
                <span>Assignment Groups</span>
                <FaSort className="ms-2 text-muted" />
              </div>
            </th>
            <th className="text-end">
              <div className="d-flex align-items-center justify-content-end">
                <span>Score</span>
                <FaSort className="ms-2 text-muted" />
              </div>
            </th>
            <th className="text-end">
              <div className="d-flex align-items-center justify-content-end">
                <span>Min</span>
                <FaSort className="ms-2 text-muted" />
              </div>
            </th>
            <th className="text-end">
              <div className="d-flex align-items-center justify-content-end">
                <span>Out Of</span>
                <FaSort className="ms-2 text-muted" />
              </div>
            </th>
            <th className="text-end">%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="fw-bold">Assignments</div>
              <div className="text-muted small">4 assignments</div>
            </td>
            <td className="text-success fw-bold text-end">380</td>
            <td className="text-end">0</td>
            <td className="text-end">400</td>
            <td className="text-end">
              <Badge bg="success">95%</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="fw-bold">Quizzes</div>
              <div className="text-muted small">2 quizzes</div>
            </td>
            <td className="text-success fw-bold text-end">180</td>
            <td className="text-end">0</td>
            <td className="text-end">200</td>
            <td className="text-end">
              <Badge bg="success">90%</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="fw-bold">Exams</div>
              <div className="text-muted small">1 exam</div>
            </td>
            <td className="text-warning fw-bold text-end">90</td>
            <td className="text-end">0</td>
            <td className="text-end">100</td>
            <td className="text-end">
              <Badge bg="warning">90%</Badge>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Individual Assignments Table */}
      <div className="card border-0">
        <div className="card-header bg-light">
          <h5 className="mb-0">
            <div className="d-flex justify-content-between">
              <span>Assignments</span>
              <span className="text-muted small">95% (380/400)</span>
            </div>
          </h5>
        </div>
        <Table hover className="mb-0">
          <thead>
            <tr className="table-light">
              <th>Assignment</th>
              <th className="text-end">Score</th>
              <th className="text-end">Out Of</th>
              <th className="text-end">%</th>
              <th>Unmute</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1 - ENV + HTML</td>
              <td className="fw-bold text-success text-end">100</td>
              <td className="text-end">100</td>
              <td className="text-end">
                <Badge bg="success">100%</Badge>
              </td>
              <td className="text-end">-</td>
            </tr>
            <tr>
              <td>A2 - React</td>
              <td className="fw-bold text-success text-end">95</td>
              <td className="text-end">100</td>
              <td className="text-end">
                <Badge bg="success">95%</Badge>
              </td>
              <td className="text-end">-</td>
            </tr>
            <tr className="table-warning">
              <td>
                A3 - NodeJS <BsExclamationTriangle className="text-warning ms-1" />
              </td>
              <td className="fw-bold text-warning text-end">85</td>
              <td className="text-end">100</td>
              <td className="text-end">
                <Badge bg="warning">85%</Badge>
              </td>
              <td className="text-end">
                <button className="btn btn-sm btn-outline-primary">Mute</button>
              </td>
            </tr>
            <tr>
              <td>A4 - MongoDB</td>
              <td className="fw-bold text-success text-end">100</td>
              <td className="text-end">100</td>
              <td className="text-end">
                <Badge bg="success">100%</Badge>
              </td>
              <td className="text-end">-</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
