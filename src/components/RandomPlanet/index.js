import React from "react";
import './RandomPlanet.css'
import API from "../../API/API";
import {Loader} from "../Loader";
import {Error} from "../Error";

class RandomPlanet extends React.Component {
    state = {
        planet: {},
        loader: true,
        error: false
    }
    swapi = new API();
    componentDidMount() {
        // setInterval(() => this.updatePlanet(), 3000);
        this.interval = setInterval(this.updatePlanet, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapi.getPlanet(id).then((planet) => {
            this.setState({
                planet,
                loader: false
            })
        }).catch(() => {
            this.setState({
                error: true,
                loader: false
            })
        })
    }


    render() {
        const {population, rotation, diametr, name, id} = this.state.planet;
        return (
            <div className='random_block'>
                {
                    this.state.loader
                        ?
                        <Loader/>
                        :
                        this.state.error
                            ?
                            <Error/>
                            :
                            <>
                                <div className="image">
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                        alt="img"/>
                                </div>
                                <div className="info_block">
                                    <h4>{name}</h4>
                                    <ul>
                                        <li>Population {population}</li>
                                        <li>Rotation Period {rotation}</li>
                                        <li>Diametr {diametr}</li>
                                    </ul>
                                </div>
                            </>
                }
            </div>
        )
    }
}

export default RandomPlanet