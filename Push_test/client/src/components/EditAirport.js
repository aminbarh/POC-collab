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



const EditAirport =(object) => 
{
    
    const [modalDemo,setModalDemo] = useState(false);
    


    
    
    const toggleModalDemo = () =>
    {   
            setModalDemo(!modalDemo);
         
    }

    function Airport(iata,name,lattitude,longitude) {
    
        this.iata = iata;
        this.name = name;
        this.lattitude = lattitude;
        this.longitude = longitude;
        }
        
  
        const [iata, setiata] = useState(object.airport.iata);
        const [name, setname] = useState(object.airport.name);
        const [lattitude, setlattitude] = useState(object.airport.lattitude);
        const [longitude, setlongitude] = useState(object.airport.longitude);
        


        //Update Airport 

        const updateAirport = async e =>
        {
            e.preventDefault();

            if (name != "" && iata!="") {
                const airport = new Airport(iata, name, lattitude, longitude);

                const response = await fetch(`http://localhost:5000/airports/${iata}`, {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(airport)
                });

                window.location = "/AirportManagement";
            }

            
            const airport = new Airport(iata, name, lattitude, longitude);
           
            const response = await fetch(`http://localhost:5000/airports/${iata}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(airport)
            });
           
            window.location = "/AirportManagement";

        }

        return (
            <Fragment>
              
                <Button className="btn-icon" color="success" size="sm" onClick={toggleModalDemo}>
                          <i className="fa fa-edit"></i>
                         
                        </Button>{` `}
                <Modal isOpen={modalDemo} toggle={toggleModalDemo}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Edit Airport
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
                         <form onSubmit={onsubmit}>
                            <FormGroup>
                                <Label for="IATA">IATA : </Label>
                                <Input  
                                    className="newInput"
                                    type="text"
                                    name="IATA"
                                    id="IATA"

                                    className="myInput"


                                    placeholder="Enter IATA"
                                    value={iata} onChange={e => setiata(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="AirportName">Aiport Name : </Label>
                                <Input
                                    type="text"
                                    name="AirportName"
                                    id="AirportName"
                                   className="myInput"

                                    placeholder="Enter Airport Name"
                                    value={name} onChange={e => setname(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Lattitude">Lattitude : </Label>
                                <Input
                                    type="number"
                                    name="Lattitude"
                                    id="Lattitude"
                                    className="myInput"
                                    placeholder="Enter Lattitude"
                                    value={lattitude} onChange={e => setlattitude(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Longitude">Longitude: </Label>
                                <Input
                                    type="number"
                                    name="Longitude"
                                    id="Longitude"
                                    className="myInput"
                                    placeholder="Enter Longitude"
                                    value={longitude} onChange={e => setlongitude(e.target.value)}
                                />
                            </FormGroup>

                           
                        </form>  
                    </ModalBody>
                    <ModalFooter>
                    <Button  color="success" onClick={ e => updateAirport(e)}>
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

export default EditAirport;