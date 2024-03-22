import { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [searching, setSearching] = useState(false); // State to track if searching is in progress
  const [searched, setSearched] = useState(false); // State to track if search has been performed

  const API_KEY = "f9d2aaa2ba94d7f625369864581a7430";

  const searchLocation = () => {
    if (location.trim() === "") return; // Don't search if location is empty

    setSearching(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      )
      .then((response) => {
        setData(response.data);
        setSearching(false);
        setSearched(true);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setData(null);
        setSearching(false);
        setSearched(true);
      });
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl font-serif relative top-[30px] mr-3 items-center">
        Weather App
      </h1>
      <input
        type="text"
        className="py-3 px-4 text-black w-full md:w-[400px] sm:w-[300px] my-12 text-lg rounded-3xl border border-gray-200 text-gray"
        value={location}
        placeholder="Enter your city"
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={handleSearch}
      />
      {searching && <div>Loading...</div>}
      {searched && !searching && data === null && (
        <span>  No data found</span>
      )}
      {data !== null && <Weather weatherdata={data} />}
    </div>
  );
}

export default App;
