const express=require("express");
const app=express();
const cors = require("cors");
const pool=require("./db");

//middleware
app.use(cors());
app.use(express.json());


app.listen(5000,()=> {
    console.log("server has started on port 5000");
}); 

//ROUTES//


//Airport

//Create airport

app.post("/airport",async(req,res) => 
{

    const iata =req.body.iata;
    const name =req.body.name;
    const lattitude =req.body.lattitude;
    const longitude =req.body.longitude;
    const newAirport = await pool.query(
        "INSERT INTO airport(iata,name,lattitude,longitude) values($1,$2,$3,$4) returning * ",
        [iata,name,lattitude,longitude]
    );
    res.json(newAirport.rows[0]);
})


//Get all airports

app.get("/airports",async(req,res)=>
{
    const allAirports=await pool.query("SELECT * FROM AIRPORT;");
    res.json(allAirports.rows);
})
//Get an airport
app.get("/airports/:iata",async(req,res)=>
{
    const iata =req.params.iata;
    const airport=await pool.query("select * from airport where iata = $1 ",[iata]);
    res.json(airport.rows[0]);
})

//Update an airport
app.put("/airports/:iata",async(req,res)=>
{
    const iata =req.params.iata;
    const name =req.body.name;
    const lattitude =req.body.lattitude;
    const longitude =req.body.longitude; 
    const updateAirport=await pool.query("update airport set name=$2,lattitude=$3,longitude=$4  where iata = $1 ",[iata,name,lattitude,longitude]);
    res.json("Airport was updated");
})


//delete an airpot

app.delete("/airports/:iata",async(req,res)=>
{
    const iata =req.params.iata;
    
    const deleteAirport=await pool.query("delete from airport where iata = $1 ",[iata]);
    res.json("Airport was deleted");
})





//Weather


//Create weather

app.post("/weather",async(req,res) => 
{

    const name =req.body.name;
    const wind_direction =req.body.wind_direction;
    const wind_speed =req.body.wind_speed;
    const visibility =req.body.visibility;
    const newWeather = await pool.query(
        "INSERT INTO weather(name,wind_direction,wind_speed,visibility) values($1,$2,$3,$4) returning * ",
        [name,wind_direction,wind_speed,visibility]
    );
    res.json(newWeather.rows[0]);
})


//Get all weathers

app.get("/weathers",async(req,res)=>
{
    const allweathers=await pool.query("SELECT * FROM WEATHER;");
    res.json(allweathers.rows);
})
//Get a weather
app.get("/weathers/:id",async(req,res)=>
{
    const id =req.params.id;
    const weather=await pool.query("select * from weather where id = $1 ",[id]);
    res.json(weather.rows[0]);
})

//Update a weather
app.put("/weathers/:id",async(req,res)=>
{
   
    const id =parseInt(req.params.id);
    
    const name =req.body.name;
    const wind_direction =req.body.wind_direction;
    const wind_speed =req.body.wind_speed; 
    const visibility =req.body.visibility; 
    const updateWeather=await pool.query("update weather set name=$2,wind_direction=$3,wind_speed=$4,visibility=$5  where id = $1 ",[id,name,wind_direction,wind_speed,visibility]);
    res.json("Weather was updated");
})


//delete a weather

app.delete("/weathers/:id",async(req,res)=>
{
    const id =req.params.id;
    const deleteWeather=await pool.query("delete from weather where id = $1 ",[id]);
    res.json("Weather was deleted");
})




//Exercise


//Create exercise

app.post("/exercise",async(req,res) => 
{

    const name =req.body.name;
    console.log(name);  
    const airport_iata =req.body.airport_iata;
    const weather_id =req.body.weather_id;
    const newExercise = await pool.query(
        "INSERT INTO exercise(name,airport_iata,weather_id) values($1,$2,$3) returning * ",
        [name,airport_iata,weather_id]
    );
    res.json(newExercise.rows[0]);
})


//Get all exercises

app.get("/exercises",async(req,res)=>
{
    const allExercises=await pool.query("SELECT * FROM Exercise;");
    res.json(allExercises.rows);
})




//Get an exercise
app.get("/exercises/:id",async(req,res)=>

{
    const id =req.params.id;
    const exercise=await pool.query("select * from exercise where id = $1 ",[id]);
    res.json(exercise.rows[0]);
})

//Get an exercise by name
app.get("/exercises/:name",async(req,res)=>
{
    const id =req.params.name;
    const exercise=await pool.query("select * from exercise where name = $1 ",[name]);
    res.json(exercise.rows[0]);
})


//Get exercise with airport and weather names 

app.get("/exercisesAdvanced",async(req,res)=>
{
    const allExercises=await pool.query("SELECT e.id ,e.name as e_name ,a.name as a_name,w.name as w_name from airport a , exercise e , weather w where (a.iata=e.airport_iata and w.id=e.weather_id);");
    res.json(allExercises.rows);
})
//Update an exercise
app.put("/exercises/:id",async(req,res)=>

{
    const id =req.params.id;
    const name =req.body.name;
    const airport_iata =req.body.airport_iata;
    const weather_id =req.body.weather_id;
    const updateExercise=await pool.query("update exercise set name=$2,airport_iata=$3,weather_id=$4  where id = $1 ",[id,name,airport_iata,weather_id]);
    res.json("Exercise was updated");
})


//delete an exercise
app.delete("/exercises/:id",async(req,res)=>
{
    
    const id =req.params.id;
    const deleteExercise=await pool.query("delete from exercise where id = $1 ",[id]);
    res.json("exercise was deleted");

})