/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { getData } from "../assets/data/tasks.js";
import { taskReducer } from "../reducers/taskReducer.js";

const TaskContext = createContext(null);
const dispatchContext = createContext(null);

const datas = getData();

export default function TaskProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, datas);
  const [editTask, setEditTask] = useState(null);
  const [isAdd, setIsAdd] = useState(true);
  const [query, setQuery] = useState("");

  // console.log(tasks, "from context file");
  const value = {
    query,
    setQuery,
    isAdd,
    setIsAdd,
    isOpen,
    setIsOpen,
    editTask,
    setEditTask,
    tasks,
    dispatch,
  };
  return (
    <TaskContext.Provider value={value}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
export function useDispatch() {
  return useContext(dispatchContext);
}
