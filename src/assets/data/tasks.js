const data = [
  {
    id: 1,
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "api", "python"],
    priority: "high",
    isFavourite: false,
  },
  {
    id: 2,
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["data Syncronization", "api", "python"],
    priority: "low",
    isFavourite: true,
  },
  {
    id: 3,
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["web", "api", "python"],
    priority: "medium",
    isFavourite: false,
  },
];

function getData() {
  return data;
}

export { getData };
