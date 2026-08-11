const express = require("express");
const cors = require("cors");

const app = express();

let batteryLevel = 100;
let temperature = 25;
let humidity = 50;


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.send("Backend is running");
});


// Receive sensor data
app.post("/api/sensor", (req,res)=>{

    let data = req.body;

    let objectID = data.info.objectID;
    let value = data.info.objectValue;


    if(objectID === 112){
        temperature = value;
    }

    if(objectID === 99){
        humidity = value;
    }

    if(objectID === 90){
        batteryLevel = value;
    }


    console.log({
        temperature,
        humidity,
        batteryLevel
    });


    res.json({
        status:"received"
    });

});

app.get("/api/sensor", (req,res)=>{

    res.json({
        temperature,
        humidity,
        batteryLevel
    });

});


// Start server LAST
app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
}); 