const kanbanBoard = {
  title: "Project Alpha",
  columns: {
    todo: [
      { id: "t1", text: "Fix CSS" },
      { id: "t2", text: "Write Tests" },
    ],
    doing: [{ id: "t3", text: "OAuth Integration" }],
    done: [],
  },
};
function moveTask(board, taskId, sourceCol, destCol) {
  const taskToMove = board.columns[sourceCol].find(
    (task) => task.id === taskId,
  );
  if (!taskToMove) {
    return board;
  }

  const newSourceCol = board.columns[sourceCol].filter(
    (task) => task.id !== taskId,
  );
  const newDestCol = [...board.columns[destCol], taskToMove];

  return {
    ...board,
    columns: {
      ...board.columns,
      [sourceCol]: newSourceCol,
      [destCol]: newDestCol,
    },
  };
}

const updated = moveTask(kanbanBoard, "t1", "todo", "doing");

console.log(updated.columns.todo.length); // Devrait être égal à 1
console.log(updated.columns.doing.length); // Devrait être égal à 2
console.log(kanbanBoard.columns.todo === updated.columns.todo); // Devrait être faux
