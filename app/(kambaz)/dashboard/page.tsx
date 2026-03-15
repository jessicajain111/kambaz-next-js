"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { RootState } from "../store";
import Link from "next/link";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}>
          Update
        </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control mb-2" rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((c: any) => (
          <div key={c._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card h-100">
              <img src="/images/reactjs.jpg" className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }} alt={c.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title overflow-hidden"
                  style={{ maxHeight: "50px" }}>
                  {c.name}
                </h5>
                <p className="card-text overflow-hidden flex-fill"
                  style={{ maxHeight: "100px", fontSize: "14px" }}>
                  {c.description}
                </p>
                <div className="mt-2">
                  <Link href={`/courses/${c._id}/home`}
                    className="btn btn-primary me-2">
                    Go
                  </Link>
                  <button className="btn btn-warning me-2"
                    id="wd-edit-course-click"
                    onClick={(e) => { e.preventDefault(); setCourse(c); }}>
                    Edit
                  </button>
                  <button className="btn btn-danger"
                    id="wd-delete-course-click"
                    onClick={(e) => { e.preventDefault(); dispatch(deleteCourse(c._id)); }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}