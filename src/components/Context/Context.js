import React, { createContext, useEffect, useState } from "react";
import months from ''


export const ClockTime = createContext();

export default function Context({ children }) {
  const [hourdigit, setHourDigit] = useState("");
  const [minutesDigit, setMinuteDigit] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let ho = date.getHours(),
        min = date.getMinutes(),
        day = date.getDay(),
        mon = date.getMonth(),
        ye = date.getFullYear();

      if (ho >= 12) {
        ho = ho - 12;
      } else if (ho === 0) {
        ho = 12;
      }
    
      if(ho > 10) ho = `0${ho}`;
      if(ho > 10) ho = `0${min}`;

      let DayNightPMAM = ho >= 12 ? "PM" : "AM";

      setHourDigit(ho);
      setMinuteDigit(min)
      setAmPm(DayNightPMAM)
      setDayNow(day)
      setMonthNow(months[mon])
      setYearNow(ye)


    }, 1000);
  }, []);

  return <div>Context</div>;
}
