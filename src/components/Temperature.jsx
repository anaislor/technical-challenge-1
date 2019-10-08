import React, { useState } from "react";

function Temperature() {
  const [temperature, setTemperature] = useState();

  function handleChange(event) {
    setTemperature(event.target.value);
  }

  //display the text based on the temperature
  function setText() {
    if (temperature < 10) return <p style={{ color: "blue" }}>It's cold ❄️</p>;
    else if (temperature > 30)
      return <p style={{ color: "red" }}> It's warm ☀️</p>;
    else return <p style={{ color: "black" }}>It's nice 🌼</p>;
  }

  return (
    <div>
      <h1>Temperature</h1>
      <input
        type="number"
        value={temperature}
        placeholder="temperature in °C"
        onChange={handleChange}
      />
      {!temperature ? "" : setText()}
    </div>
  );
}

export default Temperature;
