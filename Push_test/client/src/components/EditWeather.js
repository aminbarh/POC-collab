  import React, { Fragment, useState } from "react";

const EditWeather = ({ weather }) => {
  const [name, setname] = useState(weather.name);
  const updatename = async e => {
    e.preventDefault();
    try {
      const body = { id, name };
      const response = await fetch(
        `http://localhost:5000/updateweather/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${weather.weather_id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${weather.weather_id}`}
        onClick={() => setname(weather.name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-id">Edit Weather</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setname(weather.name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setname(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updatename(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setname(weather.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditWeather;


/* import React, {useState} from "react";
const EditWeather = () => {  
  function Weather(name,wind_direction,wind_speed,visibility) {
    
      this.name = name;
      this.wind_direction = wind_direction;
      this.wind_speed = wind_speed;
      this.visibility = visibility;
      }

      const [name, setname] = useState("");
      const [wind_direction, setwind_direction] = useState("");
      
      const [wind_speed, setwind_speed] = useState("");
      const [visibility, setvisibility] = useState("");
      
    const onsubmit = async e => {
        e.preventDefault();
     const weather = new Weather (name,wind_direction,wind_speed,visibility);
            const response = await fetch(`http://localhost:5000/updateweather/${weather.id}`,{
            method:"POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(weather)
    });
    console.log(response);
    }
    return (
        
            <div className="">
            <h1>weather update</h1>
            <form onSubmit= {onsubmit}>
                      <input type ="text" className="form-control" value={name} onChange = {e=> setname(e.target.value)}/>
                      <input type ="number" className="form-control" value={wind_direction}  onChange = {e=> setwind_direction(e.target.value)} />

                      <input type ="number" className="form-control" value={wind_speed} onChange = {e=> setwind_speed(e.target.value)}/>
                      <input type ="number" className="form-control" value={visibility} onChange = {e=> setvisibility(e.target.value)}/>
                      <button
                  className="btn btn-clean"
                  onClick={(id) => Weather (id)}
                >update</button>                  </form></div>
                 
            );
    }
    
export default EditWeather ;
 */

/* import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditWeather extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      wind_direction:'',
      wind_speed:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getWeatherDetails();
  }

  getWeatherDetails(){
    let id = this.props.match.params.id;
    axios.get(`http://localhost:5000/weather/${id}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        wind_direction: response.data.wind_direction,
        wind_speed: response.data.wind_speed,
        visibility: response.data.visibility
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  EditWeather(newWeather){
    axios.request({
      method:'put',
      url:`http://localhost:5000/editweather/${this.state.id}`,
      data: newWeather
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newWeather = {
      name: this.name.value,
      wind_direction: this.wind_direction.value,
      wind_speed: this.wind_speed.value,
      visibility: this.visibility.value
    }
    this.EditWeather(newWeather);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Edit Meetup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="wind_direction" ref="wind_direction" value={this.state.wind_direction} onChange={this.handleInputChange} />
            <label htmlFor="wind_direction">wind_direction</label>
          </div>
          <div className="input-field">
            <input type="text" name="wind_speed" ref="wind_speed" value={this.state.wind_speed} onChange={this.handleInputChange} />
            <label htmlFor="wind_speed">wind_speed</label>
          </div>
          <div className="input-field">
            <input type="text" name="visibility" ref="visibility" value={this.state.visibility} onChange={this.handleInputChange} />
            <label htmlFor="visibility">visibility</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditWeather;
 */


