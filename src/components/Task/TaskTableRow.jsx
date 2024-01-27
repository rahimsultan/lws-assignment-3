import { useDispatch, useTasks } from "../../contexts/TaskContext";
import Tag from "./Tag";

/* eslint-disable react/prop-types */
function TaskTableRow({ task }) {
  const { setEditTask, setIsOpen, setIsAdd } = useTasks();
  const dispatch = useDispatch();

  const handleFavourite = (task) => {
    dispatch({
      type: "favourite",
      task,
    });
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setIsAdd(false);
    setIsOpen(true);
  };

  const handleDelete = (task) => {
    dispatch({
      type: "deleteTask",
      task,
    });
  };
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <a className="cursor-pointer" onClick={() => handleFavourite(task)}>
          {task.isFavourite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="yellow"
              fill="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          )}
        </a>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((item, index) => {
            return <Tag key={index} value={item} />;
          })}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={() => handleDelete(task)}>
            Delete
          </button>
          <button className="text-blue-500" onClick={() => handleEdit(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TaskTableRow;
