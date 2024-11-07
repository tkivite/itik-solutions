import "./App.css";
import ReactLenis from "@studio-freight/react-lenis";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15,
        syncTouch: true,
      }}
    >
      <div className="relative w-full">
        
     
     <Outlet/>
     </div>
   
    </ReactLenis>
  );
}

export default App;
