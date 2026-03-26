"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid) as any;
  const [showNav, setShowNav] = useState(true);

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify
          className="me-4 fs-4 mb-1 text-black"
          onClick={() => setShowNav(!showNav)}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div style={{ minWidth: "200px" }}>
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}