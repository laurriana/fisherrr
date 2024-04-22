// imports
import React, { useEffect, useState } from "react";

export const DateTime = () => {
  const [today, setToday] = useState(new Date());

  var dayName = today.toLocaleString("default", { weekday: "long" });
  var month = today.toLocaleString("default", { month: "long" });

  useEffect(() => {
    var timer = setInterval(() => setToday(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="dateComponent">
      <h1>
        {dayName + " " + today.getDate() + " "}
        <span className="monthName">{month}</span>
      </h1>
      <p className="timer">it's currently {today.toLocaleTimeString()}</p>

      <a href='https://ko-fi.com/P5P4KALHX' target='_blank' rel="noreferrer"><img height='36' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
  );
};

export default DateTime;
