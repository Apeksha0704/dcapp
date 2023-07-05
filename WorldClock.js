import React, { useState, useEffect } from "react";

import { timezones as tz } from "./data/timezones";

import LocationDisplay from "./component/LocationDisplay";
import PlaceInput from "./component/PlaceInput";

function lsTest() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}



export default function WorldClock() {
  const [clocks, setClocks] = useState([]);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (lsTest() === true) {
      const hasClocksInStorage =
        localStorage.getItem("clocks") &&
        JSON.parse(localStorage.getItem("clocks")).length > 0;
      const storedClocks = hasClocksInStorage
        ? JSON.parse(localStorage.getItem("clocks"))
        : null;
      if (hasClocksInStorage) {
        setClocks(storedClocks);
      }
    } else {
      console.log("localStorage not available");
    }
  }, []);

  useEffect(() => {
    if (lsTest() === true) {
      localStorage.setItem("clocks", JSON.stringify(clocks));
    } else {
      console.log("localStorage not available");
    }
  }, [clocks]);

  const addClock = (city) => {
    setClocks([city, ...clocks]);
  };

  const removeClock = (id) => {
    setClocks(
      clocks.filter((city) => city.fields.geonameid !== parseInt(id, 10))
    );
  };

  return (
    <div className="App">
        <h1 showHeader={showHeader}>
		<center>
          <h1>World Clock</h1></center>
          <PlaceInput addClock={addClock} />
        </h1>
		
        {clocks &&
          clocks.map((city) => (
            <LocationDisplay
              key={city.id}
              removeClock={removeClock}
              city={city}
            />
          ))}
		
    </div>
  );
}
