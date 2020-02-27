import React, {Component} from 'react'
import {Header} from '../Header'
import {Switch, Route} from 'react-router-dom'
import RandomPlanet from "../RandomPlanet";
import List from "../InnerContent/ListEssence";
import {MainContent} from "../InnerContent";

class App extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <div className="">
                                <RandomPlanet />
                            </div>
                        </Route>
                        <Route path="/starships" >
                            <div className="">Starships</div>
                        </Route>
                        <Route path="/planet">
                            <div className="">Planet</div>
                        </Route>
                    </Switch>
                    <MainContent />
                </div>
            </div>
        )
    }
}

export default App