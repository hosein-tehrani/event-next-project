import { useRef } from "react";
import { getYears } from "../../dummy-data";
import Button from "../ui/button";
import classes from "./EventSearch.module.css";
import { Router } from "next/router";
export default function EventSearch({onSearch}) {
  const years = getYears();
  const months = [
    { value: 1, text: "January" },
    { value: 2, text: "February" },
    { value: 3, text: "March" },
    { value: 4, text: "April" },
    { value: 5, text: "May" },
    { value: 6, text: "June" },
    { value: 7, text: "July" },
    { value: 8, text: "August" },
    { value: 9, text: "September" },
    { value: 10, text: "October" },
    { value: 11, text: "October" },
    { value: 12, text: "December" },
  ];
  const yearRef = useRef();
  const monthRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    onSearch(selectedYear,selectedMonth)
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearRef}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">month</label>
          <select name="month" id="month" ref={monthRef}>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
