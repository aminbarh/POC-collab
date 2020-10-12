import React,{Fragment,useState,useEffect} from "react";
import {
    Modal,
    ModalBody,
    Button,
    ModalFooter,
    FormGroup,
    Label,
    Input
  } from "reactstrap";


const EditExercice =(object) => 
{
    
    
    const [modalDemo,setModalDemo] = useState(false);
    


    
    
    const toggleModalDemo = () =>
    {   
            setModalDemo(!modalDemo);
         
    }

    
  

    
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

        const [name, setname] = useState(object.exercise.e_name);
        const [airport, setAirport] = useState(object.exercise.a_name);
        const [weather, setWeather] = useState(object.exercise.w_name);

        //Update Exercise 

        const updateExercise = async e =>
        {

            
            e.preventDefault();
            if(name!="")
            {
                const id = Number(object.exercise.id);
                const exercise = new Exercise(name, searchAirport(airport, airports), searchWeather(weather, Weathers));
                const response = await fetch(`http://localhost:5000/exercises/${id}`, {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(exercise)
                });


                window.location = "/ExerciseManagement";
            }
            e.preventDefault();
           
                function searchAirport(nameKey, myArray){
                    for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].name === nameKey) {
                            return myArray[i].iata;
                        }
                    }
                }
                function searchWeather(nameKey, myArray){
                  for (var i=0; i < myArray.length; i++) {
                      if (myArray[i].name === nameKey) {
                          return myArray[i].id;
                      }
                  }
              }
        
                
                const id=Number(object.exercise.id);
                const exercise = new Exercise (name,searchAirport(airport,airports),searchWeather(weather,Weathers));
                const response = await fetch(`http://localhost:5000/exercices/${id}`,{
                method:"PUT",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(exercise)
        });
    
        
        window.location="/ExerciseManagement";
        }
        return (
            <Fragment>
              
                <Button className="btn-icon" color="success" size="sm" onClick={toggleModalDemo}>
                          <i className="fa fa-edit"></i>
                         
                        </Button>
                <Modal isOpen={modalDemo} toggle={toggleModalDemo}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Edit Weather
                         </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            onClick={toggleModalDemo}
                        >
                            <i className="tim-icons icon-simple-remove" />
                        </button>
                    </div>
                    <ModalBody>
                        <form>

                            <FormGroup>
                                <Label for="exerciseName">Exercise name : </Label>
                                <Input
                                    type="text"
                                    name="exerciseName"
                                    id="exerciseName"
                                    placeholder="Enter Exercise name"
                                    className="myInput"
                                <Label for="exerciceName">Exercice name : </Label>
                                <Input
                                    type="text"
                                    name="exerciceName"
                                    id="exerciceName"
                                    placeholder="Enter Exercice name"
                                    value={name}
                                    onChange={e => setname(e.target.value)}
                                />
                            </FormGroup>


                            <FormGroup>
                                <FormGroup>
                                    <Label for="chooseAirport">Choose Airport</Label>
                                    <Input type="select" name="select" id="chooseAirport" className="mySelect" value={airport} onChange={e => setAirport(e.target.value)}>
                                     <option selected >Choose an airport</option>

                                        {airports.map(airport => {
                                            return <option key={airport.iata} value={airport.name}>{airport.name}</option>;
                                        })}


                            <FormGroup>
                                <FormGroup>
                                    <Label for="chooseAirport">Choose Airport</Label>
                                    <Input type="select" name="select" id="chooseAirport" value={airport} onChange={e => setAirport(e.target.value)}>
                                        {airports.map(airport => {
                                            return <option key={airport.iata} value={airport.name}>{airport.name}</option>;
                                        })}

                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="chooseWeather">Choose Weather</Label>
                                    <Input type="select" name="select" id="chooseWeather"  className="mySelect" value={weather} onChange={e => setWeather(e.target.value)}>
                                        <option selected >Choose a weather</option>
                                    <Input type="select" name="select" id="chooseWeather" value={weather} onChange={e => setWeather(e.target.value)}>
                                        {Weathers.map(weather => {
                                            return <option key={weather.id} value={weather.name}>{weather.name}</option>;
                                        })}
                                    </Input>
                                </FormGroup>
                            </FormGroup>
                 
                           
                        </form>  
                    </ModalBody>
                    <ModalFooter>
                    <Button  color="success" onClick={ e => updateExercise(e)}>
                                Edit
                    </Button>
                        <Button color="secondary" onClick={toggleModalDemo}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
export default EditExercice;
