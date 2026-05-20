import React from 'react'
import classes from "./Button.module.css"
export default function button({children}) {
  return (
    <button className={classes.btn}>{children}</button>
  )
}
