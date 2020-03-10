import React from 'react'
import classes from './ListEssence.module.css'
import API from '../../../API/API'
import {EssenceDetails} from "../EssenceDetails";


class List extends React.Component{
    state = {
        peopleList: []
    }
    swapi = new API;
    componentDidMount() {
        this.uploadAllPeople();
    }

    uploadAllPeople = () =>{
        this.swapi.getAllPeople().then((peopleList)=>{
            this.setState({
                peopleList
            })
        });
    };

    render(){
        const {peopleList} = this.state;
        return(
            <div className={classes.List}>
                <ul>
                    {
                        peopleList.map((people)=>{
                            return(
                                <li
                                    onClick={() => this.props.changeCurrentPeopleId(people.id)}
                                    key={people.id}
                                >
                                    {people.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List