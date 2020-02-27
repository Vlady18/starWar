import React from 'react';
import classes from './InnerContent.module.css'
import List from "./ListEssence";


export const MainContent = ()=>{
    return(
        <div className={classes.MainContent}>
            <div className='row'>
                <div className="col-6">
                    <List />
                </div>
                <div className="col-6">
                    <List />
                </div>
            </div>
        </div>

    )
}
