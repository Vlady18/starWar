import React from 'react'
import classes from './EssenceDetails.module.css'
export const EssenceDetails = ()=>{
    return(
        <div className={classes.EssenceDetails}>
            <div className="image">
                <img src="https://image.shutterstock.com/image-illustration/earth-space-satellite-image-planet-600w-1036735336.jpg" alt="img"/>
            </div>
            <div className="info_essence">
                <h5></h5>
                <ul>
                    <li>Gender</li>
                    <li>Birth</li>
                    <li>Eye</li>
                </ul>
            </div>
        </div>
    )
}