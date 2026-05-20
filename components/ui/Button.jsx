import React from "react";
import classes from "./Button.module.css";
export default function Button({ children, onClick }) {
  return (
    <button className={classes.btn} onClick={onClick ? onClick : undefined}>
      {children}
    </button>
  );
}
