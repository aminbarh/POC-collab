import React, { Fragment,Route } from "react";
import "../App.css";

//components
import InputWeather from "./InputWeather";
import ListWeather from "./ListWeather";
import EditWeather from "./EditWeather";


function Weather() {
  return (
    <Fragment>
      <div className="container">
        <InputWeather />
        <ListWeather />
                <EditWeather />
      </div>
    </Fragment>
  );
}

export default Weather;
