import "./App.css"
import { FaMoon } from "react-icons/fa"
export default function App () {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaMoon className="text-white stroke-black stroke-[10px]" />
          <p>Light mode</p>
        </div>
      </div>
      
    </header>
  )
}