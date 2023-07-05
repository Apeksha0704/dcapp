import {useState,useEffect} from "react";
import axios from "axios";

export default function Clock()
{
  const [date, setDate] = useState(new Date());
  
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
<>
<center>
<h3> Current Time </h3>
<div className="clock-time">
</div>
<h1>
{date.toLocaleTimeString()}
</h1>
</center>
</>

)
}