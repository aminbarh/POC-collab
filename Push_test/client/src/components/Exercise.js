import React, { Fragment } from "react";
import "../App.css";

//components

import InputExercise from "./InputExercise";
import ListExercise from "./ListExercise";


function Exercise() {
  return (
    <Fragment>
      <div className="container">
        <InputExercise />
        <ListExercise />
      </div>
    </Fragment>
  );
}

export default Exercise;
