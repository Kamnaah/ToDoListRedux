import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../actions/index";
import "./todo.css";

function Todo() {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="Outer-Div">
        <div className="Inner-Div">
          <div className="title">
            <h1>TO-DO-LIST-FUNCTION-COMPONENT</h1>
          </div>

          <div className="inputSection">
            <input
              type="text"
              placeholder="write"
              className="inputBox"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="addBtn"
              onClick={() => dispatch(addToDo(input), setInput(""))}
            >
              +
            </button>
          </div>

          <div className="list">
            {list.map((elem) => {
              return (
                <div key={elem.id} className="singleList">
                  <h3>{elem.data}</h3>
                  <button
                    className="addBtn"
                    onClick={() => dispatch(deleteToDo(elem.id))}
                  >
                    D
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
