import { useParams } from "react-router";
import { modules } from "../../Database";
import { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const [moduleList, setModuleList] = useState<any[]>(modules);
  // const modulesList = modules.filter((module) => module.course === courseId);
  const modulesList = moduleList.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  const addModule = (module: any) => {
    const newModule = { ...module, _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };
  return (
    <div className="flex-fill">
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

      <hr />
      <ul className="list-group modules">
        <div className="input-group mb-3">
          <input
            value={module.name}
            onChange={(e) =>
              setModule({
                ...module,
                name: e.target.value,
              })
            }
            className="border border-2 border-dark me-2"
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              setModule({
                ...module,
                description: e.target.value,
              })
            }
            className="border border-2 border-dark ms-2"
          />
          <button
            onClick={() => {
              addModule(module);
            }}
            className="btn btn-primary ms-2"
          >
            Add
          </button>
        </div>
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
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
