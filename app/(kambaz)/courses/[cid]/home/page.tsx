"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import * as db from "../../../database";
import ModulesControls from "../modules/ModulesControls";
import LessonControlButtons from "../modules/LessonControlButtons";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import CourseStatus from "./Status";

export default function Home() {
  const { cid } = useParams();
  const course = (db as any).courses?.find((c: any) => c._id === cid);
  const modules = (db as any).modules?.filter((m: any) => m.course === cid) ?? [];

  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <div>
          <ModulesControls />
          <br />
          <br />
          <ListGroup className="rounded-0" id="wd-modules">
            {modules.map((module: any) => (
              <ListGroupItem
                key={module._id}
                className="wd-module p-0 mb-5 fs-5 border-gray"
              >
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                  <ModuleControlButtons />
                </div>

                <ListGroup className="wd-lessons rounded-0">
                  {(module.lessons ?? []).map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id ?? lesson.name}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name ?? lesson}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>

      <div className="d-none d-lg-block">
        <CourseStatus course={course} />
      </div>
    </div>
  );
}
