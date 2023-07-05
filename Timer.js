import React, { useState, useEffect, useRef } from "react";
function Timer() {
  let refInstance = useRef(null);
  let [counter, setCountdown] = useState("00:00:00");
  let getCounter = (e) => {
    let all = Date.parse(e) - Date.parse(new Date());
    let s = Math.floor((all / 1000) % 60);
    let m = Math.floor((all / 1000 / 60) % 60);
    let h = Math.floor((all / 1000 / 60 / 60) % 24);
    return {
      all,
      s,
      m,
      h,
    };
  };
  let initCounter = (e) => {
    let { all, h, m, s } = getCounter(e);
    if (all >= 0) {
      setCountdown(
        (h > 9 ? h : "0" + h) +
          ":" +
          (m > 9 ? m : "0" + m) +
          ":" +
          (s > 9 ? s : "0" + s),
      );
    }
  };
  let reset = (e) => {
    setCountdown("00:05:00");
    if (refInstance.current) clearInterval(refInstance.current);
    let id = setInterval(() => {
      initCounter(e);
    }, 1000);
    refInstance.current = id;
  };
  let voidTime = () => {
    let voidZone = new Date();
    voidZone.setSeconds(voidZone.getSeconds() + 300);
    return voidZone;
  };
  useEffect(() => {
    reset(voidTime());
  }, []);
  let onReset = () => {
    reset(voidTime());
  };
  return (
    <>
      <h1 className="h1 alert alert-info text-center">{counter}</h1>
      <div className="d-grid">
        <button className="btn btn-dark" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  );
}
export default Timer;