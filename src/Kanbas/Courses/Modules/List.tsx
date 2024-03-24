import { useParams } from "react-router";
import { modules } from "../../Database";
import { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../Store";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );

  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  // const [module, setModule] = useState({
  //   _id: "-1",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  //  const modulesList = modules.filter((module) => module.course === courseId);
  const modulesList = moduleList.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  return (
    <div className="flex-fill">
      <div className="btn-toolbar column-gap-1">
        <button type="button" className="btn btn-warning">
          Collapse All
        </button>
        <button type="button" className="btn btn-info">
          View Progress
        </button>
        <select className="form-select-sm">
          <option>Publish All</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
        <button type="button" className="btn btn-primary">
          Module
        </button>
      </div>

      <hr />
      <ul className="list-group modules">
        <div className="input-group mb-3">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  name: e.target.value,
                })
              )
            }
            className="border border-2 border-dark me-2"
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  description: e.target.value,
                })
              )
            }
            className="border border-2 border-dark ms-2"
          />
          {/* <button
            onClick={() => {
              addModule(module);
            }}
            className="btn btn-primary ms-2"
          >
            Add
          </button> */}
          <button
            onClick={() => {
              dispatch(addModule({ ...module, course: courseId }));
            }}
            className="btn btn-primary ms-2"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}
            className="btn btn-warning ms-2"
          >
            Update
          </button>
        </div>
        {moduleList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}

              <span className="float-end">
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm ms-2 me-2"
                  onClick={(e) => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <FaCheckCircle className="text-sucess" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any, index: any) => (
                  <li key={index} className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
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

export default ModuleList;
