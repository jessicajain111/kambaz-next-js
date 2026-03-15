import { FaBan, FaCheckCircle, FaFileImport, FaArrowAltCircleLeft,
  FaHome, FaChartBar, FaBullhorn, FaBell } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>

      <div className="d-flex mb-3">
        <button className="btn btn-secondary w-50 me-1">
          <FaBan className="me-2" />Unpublish
        </button>
        <button className="btn w-50" style={{ backgroundColor: "#28a745", color: "white" }}>
          <FaCheckCircle className="me-2" />Publish
        </button>
      </div>

      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaFileImport className="me-2" />Import Existing Content
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaArrowAltCircleLeft className="me-2" />Import from Commons
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaHome className="me-2" />Choose Home Page
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaChartBar className="me-2" />View Course Screen
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaBullhorn className="me-2" />New Announcement
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaChartBar className="me-2" />New Analytics
      </button>
      <button className="btn btn-secondary w-100 text-start mb-2">
        <FaBell className="me-2" />View Course Notifications
      </button>
    </div>
  );
}