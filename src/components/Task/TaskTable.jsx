import { useTasks } from "../../contexts/TaskContext";
import TaskTableHead from "./TaskTableHead";
import TaskTableRow from "./TaskTableRow";

function TaskTable() {
  const { tasks, query } = useTasks();

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <TaskTableHead />
      <tbody>
        {filtered.length === 0 ? (
          <tr>
            <td colSpan={6} className="text-center">
              Task List is empty!
            </td>
          </tr>
        ) : (
          filtered.map((task) => <TaskTableRow key={task.id} task={task} />)
        )}
      </tbody>
    </table>
  );
}

export default TaskTable;
