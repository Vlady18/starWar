import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css'

export const Header = () =>{
    return(
        <header>
                <div className="top_line">
                    <a href="/" className="logo">
                        <h1>Star DB</h1>
                    </a>
                    <nav>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><NavLink className={'nav-link'} to="/">People</NavLink></li>
                            <li className={'nav-item'}><NavLink className={'nav-link'} to="/planet">Planet</NavLink></li>
                            <li className={'nav-item'}><NavLink className={'nav-link'} to="/starships">Starhips</NavLink></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}