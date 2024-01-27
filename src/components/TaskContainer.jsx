import TaskProvider from "../contexts/TaskContext";
import TaskHeader from "./Task/TaskHeader";
import TaskTable from "./Task/TaskTable";

function TaskContainer() {
  return (
    <TaskProvider>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHeader />
            <div className="overflow-auto">
              <TaskTable />
            </div>
          </div>
        </div>
      </section>
    </TaskProvider>
  );
}

export default TaskContainer;
