/* import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add Airport</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo; */

////////////////////////////////////////////


import React, {useState} from "react";

const InputTodo = () => {  
  function Airport(iata,name,lattitude,longitude) {
    
      this.iata = iata;
      this.name = name;
      this.lattitude = lattitude;
      this.longitude = longitude;
      }
      

      const [iata, setiata] = useState("");
      const [name, setname] = useState("");
      const [lattitude, setlattitude] = useState("");
      const [longitude, setlongitude] = useState("");
      
    const onsubmit = async e => {
        e.preventDefault();
        console.log(iata);
        const airport = new Airport (iata, name, lattitude,longitude);
            const response = await fetch("http://localhost:5000/airport",{
            method:"POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(airport)
    });
    console.log(response);

    window.location="/";
    }
    return (
        
            <div className="Form1">
            <h1>airport</h1>
            <form onSubmit= {onsubmit}>
                   <input type ="text" className="form-control" value={iata}  onChange = {e=> setiata(e.target.value)} />
                      <input type ="text" className="form-control" value={name} onChange = {e=> setname(e.target.value)}/>
                      <input type ="number" className="form-control" value={lattitude} onChange = {e=> setlattitude(e.target.value)}/>
                      <input type ="number" className="form-control" value={longitude} onChange = {e=> setlongitude(e.target.value)}/>
                 
                        <button className='submit'>Insert airport</button>
                  </form></div>
                 
            );
    }
export default InputTodo ;
