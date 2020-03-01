import React from "react";
import classes from './Error.module.css'

export const Error = () =>{
    return(
        <div className={classes.error_wrap}>
            <span>Something error</span>
            <div >
                But we started correct this trouble!
            </div>
        </div>
    )
}