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
  if (!taskToMove) return board;

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

const updated = moveTask(kanbanBoard, "t1", "todo", "done");

console.log(updated.columns.todo.length);
console.log(updated.columns.doing.length);
console.log(updated.columns.done.length);
console.log(kanbanBoard.columns.doing === updated.columns.doing);
