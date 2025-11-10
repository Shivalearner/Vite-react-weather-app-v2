import { useState } from "react";
import axios from "axios";
function App() {
  // Creating State Variable
  const [inputValue, setInputValue] = useState("");
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");

  // handleChange Function
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  // Getting Weather Data
  function getWeather() {
    const weatherdata = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=bb0cd390581b5d1d2e89224d1b790cb1`
    );
    weatherdata
      .then((sucess) => {
        console.log(sucess.data);
        setweather(sucess.data.weather[0].main)
        settemp(sucess.data.main.temp)
        setdesc(sucess.data.weather[0].description)
      })
      .catch((fail) => {
        console.log(fail);
      });
  }
  return (
    <>
      {/* Fullscreen container */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[90%] sm:w-[400px] flex flex-col items-center gap-6 border border-white/20">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-2">
              🌙 Weather Report
            </h1>
            <p className="text-sm text-gray-300">
              Check the latest weather details in your city
            </p>
          </div>

          {/* Input Section */}
          <div className="flex flex-col items-center gap-3 w-full">
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              className="p-3 w-full rounded-md text-white bg-[#1e293b] border border-gray-600 focus:border-blue-400 outline-none transition-all duration-300"
              placeholder="Enter your city name"
            />
            <button
              onClick={getWeather}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-all duration-300"
            >
              Get Report
            </button>
          </div>

          {/* Weather Info */}
          <div className="bg-[#1e293b]/60 w-full rounded-lg p-4 mt-4 text-center border border-gray-600">
            <h2 className="text-lg font-semibold mb-1">
              Weather: <span className="font-normal text-gray-300"> {weather}</span>
            </h2>
            <h2 className="text-lg font-semibold mb-1">
              Temperature:
              <span className="font-normal text-gray-300"> {temp}</span>
            </h2>
            <h2 className="text-lg font-semibold">
              Description: <span className="font-normal text-gray-300"> {desc}</span>
            </h2>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-4">
            Powered by OpenWeatherMap 🌍
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
