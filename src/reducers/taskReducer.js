export function taskReducer(tasks, action) {
  if (action.type === "addTask") {
    return [...tasks, action.newTask];
  } else if (action.type === "editTask") {
    return tasks.map((item) => {
      if (item.id === action.newTask.id) {
        return action.newTask;
      }
      return item;
    });
  } else if (action.type === "favourite") {
    const edited = tasks.map((item) =>
      item.id === action.task.id
        ? { ...item, isFavourite: !item.isFavourite }
        : item
    );
    return edited;
  } else if (action.type === "deleteTask") {
    return tasks.filter((item) => item.id !== action.task.id);
  } else if (action.type === "deleteAll") {
    return [];
  } else {
    throw Error("No action matched");
  }
}
