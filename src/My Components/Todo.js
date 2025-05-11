import React from "react";
import TodoItem from "./TodoItem";

export default function Todo(props) {

  let myStyle = {
    minHeight: "70vh"
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h3>Todo List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}

