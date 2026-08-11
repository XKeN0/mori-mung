import GaugeComponent from "react-gauge-component";
import "./GaugeCard.css";

interface GaugeCardProps {
  title: string;
  value: number;
  unit: string;
  type: "temperature" | "humidity" | "battery";
}



function GaugeCard({ title, value, unit, type }: GaugeCardProps) {

  const getGaugeColors = () => {

  switch(type) {

    case "temperature":
      return [
        { limit: 18, color: "#00b7ff" },  // Cold - Blue
        { limit: 30, color: "#44ff00" },  // Normal - Green
        { color: "#ea2828" }              // Hot - Red
      ];


    case "humidity":
      return [
        { limit: 30, color: "#ffd000" },  // Dry - Yellow
        { limit: 70, color: "#5BE12C" },  // Normal - Green
        { color: "#00b7ff" }              // Humid - Blue
      ];


    case "battery":
      return [
        { limit: 20, color: "#ea2828" },  // Low - Red
        { limit: 70, color: "#ffd000" },  // Medium - Yellow
        { color: "#44ff00" }              // Good - Green
      ];

  }

};

  const getStatus = () => {

  switch(type) {

    case "temperature":
      if (value < 18) return "Cold";
      if (value <= 30) return "Normal";
      return "Hot";


    case "humidity":
      if (value < 30) return "Dry";
      if (value <= 70) return "Normal";
      return "Humid";


    case "battery":
      if (value < 20) return "Low";
      if (value <= 70) return "Normal";
      return "Good";


    default:
      return "Unknown";
  }

};


  return (
    <div className="gauge-card">

      <div className="gauge-header">

        <h3>
          {title}
        </h3>

      </div>


      <div className="gauge-value">

        <GaugeComponent
          value={value}
          type="semicircle"
          

          arc={{
            width: 0.25,
            padding: 0.03,
            cornerRadius: 5,

            subArcs: getGaugeColors()
          }}

          pointer={{
            type: "arrow",
            animationDelay: 100,
            color: "#9a9999"
          }}

          labels={{
            valueLabel: {
              formatTextValue: (value) => `${value}${unit}`
            }
          }}

        />

      </div>


      <div className="sensor-status">
        Status:
        <span>
          {getStatus()}
        </span>
      </div>


    </div>
  );
}


export default GaugeCard;