import React,{Fragment,useState} from "react";
import {
    Modal,
    ModalBody,
    Button,
    ModalFooter,
    FormGroup,
    Label,
    Input
  } from "reactstrap";



const EditWeather =(object) => 
{
    
    
    const [modalDemo,setModalDemo] = useState(false);
    


    
    
    const toggleModalDemo = () =>
    {   
            setModalDemo(!modalDemo);
         
    }

    function Weatherclass(name,wind_direction,wind_speed,visibility) {
    
        this.name = name;
        this.wind_direction = wind_direction;
        this.wind_speed = wind_speed;
        this.visibility = visibility;
        }
  


        const [name, setname] = useState(object.weather.name);
        const [wind_direction, setwind_direction] = useState(object.weather.wind_direction);
        
        const [wind_speed, setwind_speed] = useState(object.weather.wind_speed);
        const [visibility, setvisibility] = useState(object.weather.visibility);

        //Update Weather 

        const updateWeather = async e =>
        {
            e.preventDefault();
               
                
                const id=Number(object.weather.id);
                const weather = new Weatherclass (name,wind_direction,wind_speed,visibility);
                const response = await fetch(`http://localhost:5000/weathers/${id}`,{
                method:"PUT",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(weather)
        });
    
    
        window.location="/WeatherManagement";
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
                                <Label for="exampleEmail">Name : </Label>
                                <Input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Enter Name"
                                    value={name} onChange={e => setname(e.target.value)}
                                />

                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Wind direction : </Label>
                                <Input
                                    type="number"
                                    name="Wind_direction"
                                    id="Wind_direction"
                                    placeholder="Enter Wind direction"
                                    value={wind_direction} onChange={e => setwind_direction(e.target.value)}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="windSpeed">Wind speed : </Label>
                                <Input
                                    type="number"
                                    name="wind_speed"
                                    id="wind_speed"
                                    placeholder="Enter wind speed"
                                    value={wind_speed} onChange={e => setwind_speed(e.target.value)}
                                />
                            </FormGroup>
                            <Label for="visibility"> Visibility : </Label>
                            <Input
                                type="number"
                                name="visibility"
                                id="visibility"
                                placeholder=" visibility"
                                value={visibility} onChange={e => setvisibility(e.target.value)}
                            />
                 
                           
                        </form>  
                    </ModalBody>
                    <ModalFooter>
                    <Button  color="success" onClick={ e => updateWeather(e)}>
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
// }

export default EditWeather;