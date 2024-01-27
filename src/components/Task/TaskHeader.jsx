import { useDispatch, useTasks } from "../../contexts/TaskContext";
import AddNewTask from "../AddNewTask";
import SearchForm from "../SearchForm";

function TaskHeader() {
  const { isOpen, setIsOpen } = useTasks();
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    dispatch({
      type: "deleteAll",
    });
  };
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchForm />
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setIsOpen(true)}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      </div>
      {isOpen ? <AddNewTask /> : null}
    </div>
  );
}

export default TaskHeader;
