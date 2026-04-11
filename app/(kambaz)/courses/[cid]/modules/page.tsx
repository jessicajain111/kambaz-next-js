"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { editModule, setModules, updateModule as updateModuleAction } from "./reducer";
import { RootState } from "@/app/(kambaz)/store";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import * as client from "../../client";

function modulePayload(module: any) {
  const payload: Record<string, unknown> = {
    _id: module._id,
    name: module.name,
  };
  if (module.description !== undefined) payload.description = module.description;
  if (module.lessons !== undefined) payload.lessons = module.lessons;
  return payload;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = useCallback(async () => {
    if (!cid) return;
    const list = await client.findModulesForCourse(cid as string);
    dispatch(setModules(list));
  }, [cid, dispatch]);

  useEffect(() => {
    void fetchModules();
  }, [fetchModules]);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const created = await client.createModuleForCourse(cid as string, { name: moduleName });
    dispatch(setModules([...modules, created]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    if (!cid) return;
    await client.deleteModule(cid as string, moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    if (!cid) return;
    const payload = modulePayload(module);
    const updated = await client.updateModule(cid as string, payload);
    dispatch(
      setModules(
        modules.map((m: any) =>
          m._id === module._id ? { ...m, ...updated, editing: false } : m
        )
      )
    );
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
                      dispatch(updateModuleAction({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        void onUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
              </div>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => void onRemoveModule(moduleId)}
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
