import React, { Fragment, useEffect, useState, ReactDOM } from "react";

import Editexercise from "./EditExercise";

const Listexercise = () => {
  const [exercise, setexercise] = useState([]);

  //delete exercise function


  const deleteexercise = async id => {
    try {
      const deleteexercise = await fetch(`http://localhost:5000/deleteexercise/${id}`, {
        method: "DELETE"
      });

      setexercise(exercise.filter(exercise => exercise.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getexercise = async () => {
    try {
      const response = await fetch("http://localhost:5000/exercises");
      const jsonData = await response.json();

      setexercise(jsonData);
    } catch (err) {
      console.error(err.message);
    }


  };

  useEffect(() => {
    getexercise();
  }, []);

  console.log(exercise);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>name</th>
            <th>wind_direction</th>
            <th>speed</th>
            <th>visibility</th>
            <th>edit</th>
            <th>delete</th>

          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {exercise.map(exercise => (
            <tr key={exercise.id}>
             <td>{exercise.id}</td>
              <td>{exercise.name}</td>
              <td>{exercise.wind_direction}</td>
              <td>{exercise.wind_speed}</td>
              <td>{exercise.visibility}</td>

              <td>
                <Editexercise exercise={exercise} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteexercise(exercise.id)}
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

export default Listexercise;
