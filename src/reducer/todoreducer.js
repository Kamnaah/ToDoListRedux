const initialData = {
  list: [],
};
const todoReducer = (state = initialData, action) => {
  if (action.type === "ADDTODO") {
    const { id, data } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: id,
          data: data,
        },
      ],
    };
  }
  if (action.type === "DELETETODO") {
    const newList = state.list.filter((elem) => elem.id !== action.id);
    return {
      ...state,
      list: newList,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default todoReducer;
