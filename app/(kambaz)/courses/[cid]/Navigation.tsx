"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <ul className="wd list-group rounded-0" id="wd-courses-navigation">
      {links.map((link) => (
        <li key={link} className={`list-group-item border-0 ${
          pathname.includes(link.toLowerCase()) ? "active" : ""}`}>
          <Link
            href={`/courses/${cid}/${link.toLowerCase()}`}
            className={pathname.includes(link.toLowerCase())
              ? "text-danger text-decoration-none"
              : "text-danger text-decoration-none"}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}