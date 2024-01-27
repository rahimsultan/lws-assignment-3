export function nextId(tasks) {
  const id = tasks.reduce(
    (prev, next) => (prev.id > next.id ? prev.id : next.id),
    0
  );
  return id + 1;
}
