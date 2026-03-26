"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, editModule, setModules } from "./reducer";
import { RootState } from "@/app/(kambaz)/store";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    dispatch(setModules(modules.map((m: any) => m._id === module._id ? module : m)));
  };

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />
      <ul id="wd-modules" className="list-group rounded-0 mt-3">
        {modules.map((module: any) => (
          <li key={module._id} className="list-group-item p-0 mb-3 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <BsGripVertical className="fs-3" />
                {!module.editing && (
                  <span className="me-3">{module.name}</span>
                )}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
              </div>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ul className="list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id}
                    className="list-group-item wd-lesson d-flex align-items-center gap-2">
                    <BsGripVertical className="fs-3" />
                    {lesson.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}