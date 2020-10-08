import React, {useState} from "react";

const InputWeather = () => {  
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
/*         console.log(iata);
 */        const weather = new Weather (name,wind_direction,wind_speed,visibility);
            const response = await fetch("http://localhost:5000/weather",{
            method:"POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(weather)
    });
    console.log(response);

    window.location="/Weather";
    }
    return (
        
            <div className="Form1">
            <h1>weather</h1>
            <form onSubmit= {onsubmit}>
                      <input type ="text" className="form-control" value={name} onChange = {e=> setname(e.target.value)}/>
                      <input type ="number" className="form-control" value={wind_direction}  onChange = {e=> setwind_direction(e.target.value)} />

                      <input type ="number" className="form-control" value={wind_speed} onChange = {e=> setwind_speed(e.target.value)}/>
                      <input type ="number" className="form-control" value={visibility} onChange = {e=> setvisibility(e.target.value)}/>
                 
                        <button className='submit'>Insert weather</button>
                  </form></div>
                 
            );
    }
export default InputWeather ;
