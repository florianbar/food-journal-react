import React, { Component } from 'react';

import axios from '../../axios-food-journal';

import BodyMeasurement from '../../components/BodyMeasurement/BodyMeasurement';
import Meals from '../../components/Meals/Meals';
//import Button from '../../components/UI/Button/Button';

class Day extends Component {
    testHandler = () => {
        axios.patch("/foods/Mon%20Aug%2031%202020/breakfast.json", { 0: "dsadsa" })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        // axios.patch("/test1.json", { test1: { test2: ["abc", "def"] } })
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    render () {
        return (
            <div>
                {/* <Button 
                    btntype="Success"
                    clicked={this.testHandler}>Test data</Button> */}

                <BodyMeasurement {...this.props} />
                <Meals {...this.props} />
            </div>
        );
    }
};

export default Day;