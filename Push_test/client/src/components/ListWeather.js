import React, { Fragment, useEffect, useState, ReactDOM, state} from "react";
import EditWeather from "./EditWeather";

const ListWeather = () => {
  const [Weather, setWeather] = useState([]);

  //delete weather function


  const deleteWeather = async id => {
    try {
      const deleteWeather = await fetch(`http://localhost:5000/deleteweather/${id}`, {
        method: "DELETE"
      });
      
      setWeather(Weather.filter(weather => weather.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const editWeather = async id => {
    try {
      const editWeather = await fetch(EditWeather+id , {method: "GET"
      });

      setWeather(Weather.filter(weather => weather.id == id));
      state = { redirect: {} };

    } catch (err) {
      console.error(err.message);
    }
  };

/* 
  class UserItem extends Weather {

    render(){
return(
<ul id="weather">
{this.state.items.map((item,i) => 
<li className='list-group-item' key={i} data-id={item.id}>{item.name}
<button onClick={() => this.yourfunc(item.id)}>X</button>
</li>
)}
</ul>
) 
}}
 */



  const getWeather = async () => {
    try {
      const response = await fetch("http://localhost:5000/weathers");
      const jsonData = await response.json();

      setWeather(jsonData);
    } catch (err) {
      console.error(err.message);
    }


  };

  useEffect(() => {
    getWeather();
  }, []);

  console.log(Weather);

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
          {Weather.map(weather => (
            <tr key={weather.id}>
              <td>{weather.name}</td>
              <td>{weather.wind_direction}</td>
              <td>{weather.wind_speed}</td>
              <td>{weather.visibility}</td>
              <td>
                
                {/* edit
                <EditWeather weather={weather.id} /> */}
                
              </td>
            <button onClick={()=>editWeather(weather.id)}>wip</button>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteWeather(weather.id)}
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
export default ListWeather;
