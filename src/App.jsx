import { useState } from "react";
import axios from "axios"; // Import axios library
import Weather from "./Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "f9d2aaa2ba94d7f625369864581a7430";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl font-serif mt-7 mr-3 items-center">Weather App</h1>
      <input
        type="text"
        className="py-3 px-4 w-full md:w-[400px] sm:w-[300px] my-12 text-lg rounded-3xl border border-gray-200 text-gray"
        value={location}
        placeholder="Enter your city"
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
      />
      <Weather weatherdata={data} />
    </div>
  );
}

export default App;
