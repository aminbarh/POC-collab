import React, { Fragment } from "react";
import "../App.css";

//components

import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

function Airport() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default Airport;
