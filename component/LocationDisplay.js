import React, { useEffect, useState, useRef } from "react";


const LocationDisplay = ({ city, removeClock }) => {
  const startTime = new Date(Date.now()).toLocaleTimeString("en-US", {
    timeZone: city.fields.timezone
  });
  const [time, setTime] = useState(startTime);
  const [view, setView] = useState("digital");

 
  
  //
  var n = useRef(null);
  var t = useRef(null);

  useEffect(() => {
    // console.log(city.fields.timezone);
  }, [city]);

  useEffect(() => {
    const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
    n.current = setTimeout(() => {
      t.current = setInterval(() => {
        setTime(
          new Date(Date.now()).toLocaleTimeString("en-US", {
            timeZone: city.fields.timezone
          })
        );
      });
    }, timeOffset);

    return function cleanup() {
      n.current = null;
      clearInterval(t.current);
    };
  }, [city.fields.timezone]);

  const [timeDig, timeOfDay] = time.split(" ");
  const [hours, minutes, seconds] = timeDig.split(":");

  const closeHandler = (e) => {
    removeClock(e.currentTarget.name);
  };

  return (
   <center>
      <div >
        <h1>{city.fields.asciiname}</h1>
      </div>
      <close name={city.fields.geonameid} onClick={closeHandler}>
      </close>
      {view === "digital" && (
        <h1>
          {hours}: {minutes} : {seconds} {timeOfDay}
        </h1>
      )}
    </center>
  );
};

export default LocationDisplay;