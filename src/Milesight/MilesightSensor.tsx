import { useState, useEffect } from 'react'

import GaugeCard from './GaugeCard.tsx';

function MilesightSensor() {

  const [temperature, setTemperature] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [battery, setBattery] = useState(0)


  useEffect(() => {

    const fetchSensorData = () => {

      fetch("http://192.168.2.102:5000/api/sensor")
        .then(response => response.json())
        .then(data => {

          console.log(data)

          setTemperature(data.temperature)
          setHumidity(data.humidity)
          setBattery(data.batteryLevel)

        })
        .catch(error => {
          console.log("Error fetching data:", error)
        })

    }

    fetchSensorData()
    const interval = setInterval(fetchSensorData, 2000)
    return () => clearInterval(interval)


  }, [])


  return (
    
    <div style={{padding: '20px'}}>
        <h1 style={{ fontFamily: "Edu VIC WA NT Hand, cursive", fontSize: "36px", color: "#fff", textShadow: "0 2px 4px rgba(0, 0, 0, 0.36)" }}>Milesight Dashboard</h1>
        <p style={{ color: "#ffffff", fontSize: "16px", fontFamily: 'poppins' }}>EM320-TH Sensor Data</p>

        

        <div className= "dashboard" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }} >
          <GaugeCard
            title="Temperature"
            value={temperature}
            unit="°C"
            type="temperature"
          />



          <GaugeCard
            title="Humidity"
            value={humidity}
            unit="%"
            type="humidity"
          />


          <GaugeCard
            title="Battery"
            value={battery}
            unit="%"
            type="battery"
          />
        </div>
        
        

        

    </div>
  )
}

export default MilesightSensor