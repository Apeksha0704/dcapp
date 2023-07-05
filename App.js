import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import WorldClock from "./WorldClock";
import Alarm from "./Alarm";
import NavBar from "./NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
 
  return (
    <div className="App">
 
<BrowserRouter>
<NavBar/>
<Routes>
   <Route path="/" element={<Clock/>}/>
   <Route path="/stopwatch" element={<StopWatch/>}/>
   <Route path="/timer" element={<Timer/>}  />
   <Route path="/worldclock" element={<WorldClock/>}/>
   <Route path="/alarm" element={<Alarm/>}/>
   <Route path="*" element={<Clock/>}/>
</Routes>
</BrowserRouter>
  
</div>
  );
}

export default App;