import {Link} from "react-router-dom";

export default function NavBar(){
 return(
<>
<center>
 <div className="nav">
   <Link to="/"> Clock </Link>
   <Link to="/stopwatch"> StopWatch </Link>
   <Link to="/timer"> Timer </Link>
   <Link to="/worldclock"> WorldClock </Link>
   <Link to="/alarm"> Alarm </Link>
  

</div>
</center>
</>
);
}