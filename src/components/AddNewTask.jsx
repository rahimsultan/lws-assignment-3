import { useState } from "react";
import { nextId } from "../assets/utils/nextId";
import { useDispatch, useTasks } from "../contexts/TaskContext";

/* eslint-disable react/prop-types */
function AddNewTask() {
  const { tasks, setIsOpen, editTask, setEditTask, isAdd, setIsAdd } =
    useTasks();
  const dispatch = useDispatch();

  const [error, setError] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  const [newTask, setNewTask] = useState(
    editTask || {
      id: nextId(tasks),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  const handleAddTask = (e) => {
    e.preventDefault();

    let newError = {};

    if (newTask.title === "") {
      newError = { ...newError, title: "Please enter a title" };
    }
    if (newTask.description === "") {
      newError = {
        ...newError,
        description: "Description box cannot be empty",
      };
    }
    if (newTask.tags.length === 0) {
      newError = { ...newError, tags: "Enter tags and separate with a comma" };
    }
    if (newTask.priority === "") {
      newError = { ...newError, priority: "Set priority" };
    }

    setError(newError);

    const errorLength = Object.keys(newError).length;
    if (errorLength !== 0) {
      return;
    }

    if (isAdd) {
      dispatch({
        type: "addTask",
        newTask,
      });
    } else {
      dispatch({
        type: "editTask",
        newTask,
      });

      setIsAdd(true);
      setEditTask(null);
    }

    // Close modal
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleClose = () => {
    setEditTask(null);
    setIsAdd(true);
    setIsOpen(false);
  };
  return (
    <>
      <div className="bg-black/70 h-full w-full z-[60] absolute inset-0"></div>
      <form className="absolute top-[1%] left-1/2 -translate-x-1/2 z-[100] mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11 lg:my-20">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={newTask.title}
              onChange={handleChange}
            />
            {error.title && <p className="text-red-500">{error.title}</p>}
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={newTask.description}
              onChange={handleChange}
            ></textarea>
            {error.description && (
              <p className="text-red-500">{error.description}</p>
            )}
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={newTask.tags}
                onChange={handleChange}
              />
              {error.tags && <p className="text-red-500">{error.tags}</p>}
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={newTask.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {error.priority && (
                <p className="text-red-500">{error.priority}</p>
              )}
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-center gap-3 lg:mt-20">
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={(e) => handleAddTask(e)}
          >
            {isAdd ? "Create new Task" : "update Task"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewTask;
