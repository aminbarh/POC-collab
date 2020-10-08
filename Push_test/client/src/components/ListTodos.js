import React, { Fragment, useEffect, useState, ReactDOM } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function


  const deleteTodo = async iata => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/deleteairport/${iata}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.iata !== iata));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/airports");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }


  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>reference</th>
            <th>name</th>
            <th>lattitude</th>
            <th>longitude</th>
            <th>edit</th>
            <th>delete</th>

          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.iata}>
             <td>{todo.iata}</td>
              <td>{todo.name}</td>
              <td>{todo.lattitude}</td>
              <td>{todo.longitude}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.iata)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
