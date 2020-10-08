/* import React, { useState } from 'react';
import './App.css';
import Form1 from "./components/inputap";


function App () {
  return <h1>  <Form1 /></h1>
  
  ;
}
export default App; 
 */





//import Form2 from "./components/Listwe";
//import Form3 from "./components/Listex";

//components

//import Inputap from "./components/Inputap";
//function App() {
  //return (
    //<Fragment>
      // <Inputap/>
 //   </Fragment>
  //);
//}
/* 
function App () {
  const [Inputap, setInputap] = useState("");
  const [airport, setairport] =useState([]);
  return(
    <div className="App"> <div>{setInputap}</div>
       <Form1 airport={airport} setairport={setairport} setInputap = {setInputap} />
   
   </div>
  
)} */

/////////////////////////////////////////////


/* import React, { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav"
import Listap from "./components/Listap"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom" */
/* import Airport from "./components/inputap"; */
/* import Exercise from "./components/Exercise";
import Weather from "./components/Weather";
import Hello from "./Hello"; */

//components


/* function App() {
  return (
<Router>
<div>
  <Nav />
  <Switch>
    {/* <Route path="/" exact component={Hello} /> */
    /*<Route path="./listap" component={Airport}/> */
   /*  <Route path ="/Exercise" component={Exercise} />
    <Route path ="/Weather" component={Weather} /> */


  /* </Switch>

</div>
</Router>
  );
}

export default App; */


import React, { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Airport from "./components/Airport";
import Exercise from "./components/Exercise";
import Weather from "./components/Weather";
import Hello from "./Hello";

//components


function App() {
  return (
<Router>
<div>
  <Nav />
  <Switch>
    <Route path="/" exact component={Hello} />
    <Route path="/airport" component={Airport}/>
    <Route path ="/Exercise" component={Exercise} />
    <Route path ="/Weather" component={Weather} />


  </Switch>

</div>
</Router>
  );
}

export default App;
