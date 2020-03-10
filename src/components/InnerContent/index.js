import React from 'react';
import classes from './InnerContent.module.css'
import List from "./ListEssence";
import {EssenceDetails} from "./EssenceDetails";
import API from "../../API/API";


export class MainContent extends React.Component{

    render(){
        return(
            <div className={classes.MainContent}>
                <div className='row'>
                    <div className="col-6">
                        <List
                            changeCurrentPeopleId={this.props.changeCurrentPeopleId}
                        />
                    </div>
                    <div className="col-6">
                        <EssenceDetails
                            currentPeopleId={this.props.currentPeopleId}
                            uploadDetails = {this.props.uploadDetails}
                        />
                    </div>
                </div>
            </div>

        )
    }
}
