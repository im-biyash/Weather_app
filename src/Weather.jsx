import React from "react";

const Weather = ({ weatherdata }) => {
  return (
    <div>
      {weatherdata.weather ? (
   <div className="w-[300px] md:w-[500px] h-[250px] bg-[#0a192f] text-white shadow-lg rounded-xl m-auto relative px-6 top-[10%] ">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-lg font-bold ml-4">
                    {weatherdata.name}, {weatherdata.sys.country}
                  </p>
                  <p className="text-sm">
                    {weatherdata.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl">
                    {(weatherdata.main.temp - 273.15).toFixed()} °C {/* Convert temperature to Celsius */}
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
                  alt="Weather Icon" className="color-white"
                />
              </div>
              <div className="footer flex justify-between gap-x-2 ">
                <p className=" sm:mb-3">Feels like:</p>
                <p>{(weatherdata.main.feels_like - 273.15).toFixed()}°C</p> {/* Convert feels like temperature to Celsius */}
              </div>
              <div className="footer flex justify-between  gap-x-2  ">
                <p className="sm:mb-3">Humidity:</p>
                <p>{weatherdata.main.humidity}</p>
              </div>
             
            </div>
          </div>
          <div className="footer flex justify-around mt-14 ">
            <p>
              Wind Speed:
              {weatherdata.wind.speed.toFixed()} Kph 
            </p>
            <p>
              Pressure:
              {weatherdata.main.pressure} hpa 
            </p>
          </div>
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default Weather;
