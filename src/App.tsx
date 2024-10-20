import "./App.css";
import { useState } from "react";
import { FaMoon, FaSearch } from "react-icons/fa"
export default function App () {
  const [darkMode, isDarkMode] = useState(false)

  function toggleDarkMode () {
    isDarkMode(!darkMode)
  }
 
  return (
    <div className="flex flex-col">
      <header className="">
        <div className={`${darkMode ? "bg-slate-800 text-white" : "bg-white text-black" } flex items-center justify-between px-4 py-8 shadow-md"`}>
          <div>
            <h1 className="font-bold">Where in the world?</h1>
          </div>
          <button className="flex items-center gap-2" onClick={toggleDarkMode}>
            <FaMoon className={`${darkMode ? "text-white stroke-white " : " text-white stroke-black stroke-[40px] "}`}/>
            <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
          </button>
        </div>
      </header>
      <main>
        <div className="flex items-center bg-white mx-4 mt-6 py-4 px-8 rounded-md gap-8 shadow-md">
          <FaSearch className="text-xl text-gray-300"/>
          <input type="text" placeholder="Search for a country..." className={`${darkMode ? "placeholder:text-white" : "placeholder:text-gray-300 "}font-light`}/>
        </div>
      </main>
    </div>
    
  )
}