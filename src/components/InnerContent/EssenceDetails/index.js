import React from 'react'
import classes from './EssenceDetails.module.css'
import API from "../../../API/API";
import {Loader} from "../../Loader";

export class EssenceDetails extends React.Component {
    state = {
        loader: true,
        people: {}
    }
    componentDidMount() {
        this.uploadDetails()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.currentPeopleId !== this.props.currentPeopleId){
            this.uploadDetails()
        }
    }

    swapi = new API;
    uploadDetails = ()=>{
        const {currentPeopleId} = this.props;
        if(!currentPeopleId){
            return;
        }
            this.swapi.getPeople(currentPeopleId).then((people)=>{
            this.setState({
                people,
                loader: false
            })
        });
    }
    render() {
        const {gender, eye_color, birth_year, hair_color, height, mass, name} = this.state.people;
        return (
            <>
            {
                this.state.loader
                    ?
                <Loader />
                    :
                <div className={classes.EssenceDetails}>
                    <div className="image">
                        <img
                            src="https://image.shutterstock.com/image-illustration/earth-space-satellite-image-planet-600w-1036735336.jpg"
                            alt="img"/>
                    </div>
                    <div className="info_essence">
                        <h5>Name: {name}</h5>
                        <ul>
                            <li>Gender: {gender}</li>
                            <li>Birth: {birth_year}</li>
                            <li>Eye: {eye_color}</li>
                            <li>hair_color: {hair_color}</li>
                            <li>height: {height}</li>
                            <li>mass: {mass}</li>
                        </ul>
                    </div>
                </div>
            }
            </>
        )
    }
}