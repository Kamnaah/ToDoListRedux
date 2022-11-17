const addToDo = (data) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

const deleteToDo = (id) => {
  return {
    type: "DELETETODO",
    id,
  };
};

export { addToDo, deleteToDo };
