"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import Link from "next/link";
import * as client from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description",
  });

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      setEnrolledCourses(myCourses);
      dispatch(setCourses(myCourses));
      const all = await client.fetchAllCourses();
      setAllCourses(all);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setEnrolledCourses([...enrolledCourses, newCourse]);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    setEnrolledCourses(enrolledCourses.filter((c: any) => c._id !== courseId));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) =>
      c._id === course._id ? course : c
    )));
    setEnrolledCourses(enrolledCourses.map((c: any) =>
      c._id === course._id ? course : c
    ));
  };

  const onEnroll = async (courseId: string) => {
    await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
    const myCourses = await client.findMyCourses();
    setEnrolledCourses(myCourses);
    dispatch(setCourses(myCourses));
  };

  const onUnenroll = async (courseId: string) => {
    await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
    const myCourses = await client.findMyCourses();
    setEnrolledCourses(myCourses);
    dispatch(setCourses(myCourses));
  };

  const isEnrolled = (courseId: string) =>
    enrolledCourses.some((c: any) => c._id === courseId);

  const displayedCourses = showAllCourses ? allCourses : enrolledCourses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={onAddNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2"
            id="wd-update-course-click"
            onClick={onUpdateCourse}>
            Update
          </button>
        </h5>
      )}
      <button className="btn btn-secondary float-end me-2"
        onClick={() => setShowAllCourses(!showAllCourses)}>
        {showAllCourses ? "My Courses" : "All Courses"}
      </button>
      <br />
      {isFaculty && (
        <>
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control mb-2" rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </>
      )}
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((c: any) => (
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
                <div className="mt-2 d-flex flex-wrap gap-2">
                  <Link href={`/courses/${c._id}/home`}
                    className="btn btn-primary">
                    Go
                  </Link>
                  {isFaculty && (
                    <>
                      <button className="btn btn-warning"
                        id="wd-edit-course-click"
                        onClick={(e) => { e.preventDefault(); setCourse(c); }}>
                        Edit
                      </button>
                      <button className="btn btn-danger"
                        id="wd-delete-course-click"
                        onClick={(e) => { e.preventDefault(); onDeleteCourse(c._id); }}>
                        Delete
                      </button>
                    </>
                  )}
                  {showAllCourses && (
                    isEnrolled(c._id) ? (
                      <button className="btn btn-danger"
                        onClick={(e) => { e.preventDefault(); onUnenroll(c._id); }}>
                        Unenroll
                      </button>
                    ) : (
                      <button className="btn btn-success"
                        onClick={(e) => { e.preventDefault(); onEnroll(c._id); }}>
                        Enroll
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}