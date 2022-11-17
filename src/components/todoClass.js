import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo, deleteToDo } from "../actions/index";
import "./todo.css";
export class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: "",
    };
  }
  render() {
    return (
      <div className="Outer-Div">
        <div className="Inner-Div">
          <div className="title">
            <h1>TO-DO-LIST-CLASS-COMPONENT</h1>
          </div>

          <div className="inputSection">
            <input
              type="text"
              placeholder="write"
              className="inputBox"
              value={this.state.todoData}
              onChange={(e) => this.setState({ todoData: e.target.value })}
            />
            <button
              className="addBtn"
              onClick={() => {
                this.props.addToDo(this.state.todoData);
                this.setState({ todoData: "" });
              }}
            >
              +
            </button>
          </div>

          <div className="list">
            {this.props.todoState &&
              this.props.todoState.list.map((elem) => {
                return (
                  <div key={elem.id} className="singleList">
                    <h3>{elem.data}</h3>
                    <button
                      className="addBtn"
                      onClick={() => this.props.deleteToDo(elem.id)}
                    >
                      D
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoState: state.todoReducer,
  };
}

export default connect(mapStateToProps, { addToDo, deleteToDo })(TodoClass);
