
import React,{useState,useEffect} from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody,
  Table
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

import EditExercise from "components/EditExercise";

const ExerciseManagement = () => {


  

  const [exercises, setexercises] = useState([]);
  const [exerciseName, setexerciseName] = useState("");


    const getexercises = async () => {
      try {
        const response = await fetch("http://localhost:5000/exercisesAdvanced");
        const jsonData = await response.json();
       
        setexercises(jsonData);
       
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getexercises();
    }, []);
 



    // GET AIRPORTS  ( GET REQUEST )
    const [airports, setairports] = useState([]);
    const getairports = async () => {
      try {
        const response = await fetch("http://localhost:5000/airports");
        const jsonData = await response.json();
  
        setairports(jsonData);
        
        
      } catch (err) {
        console.error(err.message);
      }
    };


      useEffect(() => {
        getairports();
      }, []);
      

    

    // GET WEATHERS  ( GET REQUEST )

    const [Weathers, setWeathers] = useState([]);
    const getWeathers = async () => {
      try {
        const response = await fetch("http://localhost:5000/weathers");
        const jsonData = await response.json();
  
        setWeathers(jsonData);
      } catch (err) {
        console.error(err.message);
      }
  
  
    };
  
    useEffect(() => {
      getWeathers();
    }, []);

   



    // CREATE EXERCICE (POST REQUEST)
    const [name, setname] = useState("");
    const [airport, setAirport] = useState("");
    const [weather, setWeather] = useState("");
    
    
    function Exercise(name, airport_iata, weather_id) {
      this.name = name;
      this.airport_iata = airport_iata;
      this.weather_id = weather_id;
    }
    
    
    //Find airport iata by name
    function searchAirport(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
          return myArray[i].iata;
        }
      }
    }

    //Find weather id by name
    function searchWeather(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
          return myArray[i].id;
        }
      }
    }
 
    const onSubmit = async e => {
         e.preventDefault();
         if(name!="")
         {
           const exercise = new Exercise(name, searchAirport(airport, airports), searchWeather(weather, Weathers));

           const response = await fetch("http://localhost:5000/exercise", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(exercise)
           });
           window.location = "/ExerciseManagement";
        }
      
    };


     //delete weather function
     const deleteExercise = async id => {
     
      try {
       
        const deleteExercise = await fetch(`http://localhost:5000/exercises/${id}`, {
          method: "DELETE"
        });
  
        setexercises(exercises.filter(exercise => exercise.id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
    
    return (
      <>

        <div className="page-header header-filter">
          <div className="content-center brand">

            <h1 className="h1-seo">Exercise Management </h1>
            <Card>
        <CardBody>
          <form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="exerciseName">Exercise name : </Label>
                    <Input
                      type="text"
                      name="exerciseName"
                      id="exerciseName"
                      placeholder="Enter Exercise name"
                      value={name}
                      onChange={e => setname(e.target.value)}
                    />
                  </FormGroup>


                  <FormGroup>
                    <FormGroup>
                      <Label for="chooseAirport">Airport</Label>
                      <Input type="select" name="select" id="chooseAirport" value={airport} onChange={e => setAirport(e.target.value)}>
                        <option selected >Choose an airport</option>

                        {airports.map(airport => {
                          return <option key={airport.iata} value={airport.name}>{airport.name}</option>;
                        })}

                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="chooseWeather">Weather</Label>
                      <Input type="select" name="select" id="chooseWeather" value={weather} onChange={e => setWeather(e.target.value)}>
                        <option selected >Choose a weather</option>
                        {Weathers.map(weather => {
                          return <option key={weather.id} value={weather.name}>{weather.name}</option>;
                        })}
                      </Input>
                    </FormGroup>
                  </FormGroup>
            <Button type="submit" color="success">Create an exercise</Button>
          </form>
        </CardBody>
      </Card>

          <br></br>
            <Card>
              <CardBody>
                <Table >
                  <thead>
                    <tr>
                      <th className="text-center">Exercise name</th>
                      <th>Aiport</th>
                      <th className="text-center">Weather</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exercises.map(exercise => (
                      <tr key={exercise.id}>

                        <td className="text-center">{exercise.e_name}</td>
                        <td>{exercise.a_name} </td>

                        <td className="text-center">{exercise.w_name}</td>                 
                        <td className="text-right">
                            <EditExercise exercise={exercise} /> 
                            <Button className="btn-icon" color="danger" size="sm"
                              onClick={() => deleteExercise(exercise.id)}>
                              <i className="fa fa-times" />
                            </Button>
                        </td>
                      </tr>  ))}

                  </tbody>
                </Table>
              </CardBody>
              </Card>
          </div>
        </div>
      
      
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
           
            
          </div>
        </div>
        

                  
      </>

      
    );
  }


export default ExerciseManagement;
