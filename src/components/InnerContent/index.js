import React from 'react';
import classes from './InnerContent.module.css'
import List from "./ListEssence";
import {EssenceDetails} from "./EssenceDetails";


export const MainContent = ()=>{
    return(
        <div className={classes.MainContent}>
            <div className='row'>
                <div className="col-6">
                    <List />
                </div>
                <div className="col-6">
                    <EssenceDetails />
                </div>
            </div>
        </div>

    )
}
