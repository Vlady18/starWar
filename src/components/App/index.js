import React, {Component} from 'react'
import {Header} from '../Header'
import {Switch, Route} from 'react-router-dom'

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <div className="">People</div>
                    </Route>
                    <Route path="/starships" >
                        <div className="">Starships</div>
                    </Route>
                    <Route path="/planet">
                        <div className="">Planet</div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App