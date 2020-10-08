 import React, {useState} from "react";

const Form1 = () => {  
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
            <h1>za</h1>
            <form onSubmit= {onsubmit}>
                   <input type ="text" className="form-control" value={iata}  onChange = {e=> setiata(e.target.value)} />
                      <input type ="text" className="form-control" value={name} onChange = {e=> setname(e.target.value)}/>
                      <input type ="number" className="form-control" value={lattitude} onChange = {e=> setlattitude(e.target.value)}/>
                      <input type ="number" className="form-control" value={longitude} onChange = {e=> setlongitude(e.target.value)}/>
                        <button className='submit'>Insert airport</button>
                  </form></div>
                 
            );
    }
export default Form1 ;


/* import React, {Component} from 'react';

class RegisterComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      longitude:'',
      lattitude:'',


      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangename = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChangelongitude = (e) => {
    this.setState({
      [e.target.longitude]: e.target.value
    })
  }
  handleChangelattitude = (e) => {
    this.setState({
      [e.target.lattitude]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data   =  { name:this.state.name, longitude:this.state.longitude , lattitude:this.state.lattitude }

   fetch (' http://localhost:5000/airport', { method: 'POST', 

    body: JSON.stringify(data), // data can be `string` or {object}!
 headers:{ 'Content-Type': 'application/json' } }) 
    /* headers: {'Content-Type':'application/x-www-form-urlencoded'}}) 
    .then(res => res.json())

    .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response));
   }



  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter name</label>
        <input id="name" name="name" type="text"  onChange={this.handleChange} />

        <label htmlFor="lattitude">lattitude</label>
        <input id="lattitude" name="lattitude" type="text" onChange={this.handleChangelattitude}/>

        <label htmlFor="longitude"> longitude</label>
        <input id="longitude" name="longitude" type="longitude" onChange={this.handleChangelongitude} />


        <button>validate</button>
        </form>
    </div>
    );
  }
}

export default RegisterComponent; */



/* const Form1 = ({setInputap, weather,setweather}) => {
    const inputapHandler = (e) => {
        console.log (e.target.value);
        setInputap(e.target.value);
    };
    const submitapHandler = (e) => {
        e.preventDefault();
    }
    return (
<div className="App">
          <form>
           <input onChange={inputapHandler} type ="ap" />
            <button onsubmit={ submitapHandler} className="todo-button" type="submit">
                <button>az</button>
              <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
              <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </form>
          <div className="todo-container">
            <ul className="todo-list"></ul>
          </div>
      </div>    
    );
}
 */