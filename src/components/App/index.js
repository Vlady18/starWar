import React, {Component} from 'react'
import {Header} from '../Header'
import {Switch, Route} from 'react-router-dom'
import RandomPlanet from "../RandomPlanet";
import List from "../InnerContent/ListEssence";
import {MainContent} from "../InnerContent";
import API from "../../API/API";

class App extends Component{
    state={
        currentPeopleId: 5
    }

    changeCurrentPeopleId = (id) =>{
        this.setState({
            currentPeopleId: id
        })
    }

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
                    <MainContent
                        changeCurrentPeopleId={this.changeCurrentPeopleId}
                        currentPeopleId={this.state.currentPeopleId}
                    />
                </div>
            </div>
        )
    }
}

export default App