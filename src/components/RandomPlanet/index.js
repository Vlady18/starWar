import React from "react";
import './RandomPlanet.css'
const RandomPlanet = ()=>{
    return(
        <div className='random_block'>
            <div className="image">
                <img src="https://image.shutterstock.com/image-illustration/earth-space-satellite-image-planet-600w-1036735336.jpg" alt="img"/>
            </div>
            <div className="info_block">
                <h4>Mustafar</h4>
                <ul>
                    <li>Population 2000</li>
                    <li>Rotation Period 36</li>
                    <li>Diametr 4200</li>
                </ul>
            </div>
        </div>
    )
}
export default RandomPlanet