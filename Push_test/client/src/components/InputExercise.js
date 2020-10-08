import React, {useState} from "react";

const InputExercise = () => {  
  function Exercise(name,airport_iata,weather_id,visibility) {
    
      this.name = name;
      this.airport_iata = airport_iata;
      this.weather_id = weather_id;
      }
      
      const [name, setname] = useState("");
      const [airport_iata, setairport_iata] = useState("");
      
      const [weather_id, setweather_id] = useState("");
      
    const onsubmit = async e => {
        e.preventDefault();
/*         console.log(iata);
 */        const exercise = new Exercise (name,airport_iata,weather_id);
            const response = await fetch("http://localhost:5000/exercice",{
            method:"POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(Exercise)
    });
    console.log(response);

    window.location="/Exercise";
    }
    return (
        
            <div className="Form1">
            <h1>Exercise</h1>
            <form onSubmit= {onsubmit}>
                      <input type ="text" className="form-control" value={name} onChange = {e=> setname(e.target.value)}/>
                      <input type ="number" className="form-control" value={airport_iata}  onChange = {e=> setairport_iata(e.target.value)} />

                      <input type ="number" className="form-control" value={weather_id} onChange = {e=> setweather_id(e.target.value)}/>
                 
                        <button className='submit'>Insert Exercise</button>
                  </form></div>
                 
            );
    }
export default InputExercise ;
