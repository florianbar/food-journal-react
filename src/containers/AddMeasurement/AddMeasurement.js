import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators/bodyMeasurement';

import Button from '../../components/UI/Button/Button';

class AddMeasurement extends Component {
    state = {
        form: {
            weight: {
                value: this.props.weight
            },
            bodyFat: {
                value: this.props.bodyFat
            }
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            weight: parseFloat(this.state.form.weight.value),
            bodyFat: parseFloat(this.state.form.bodyFat.value)
        };

        this.props.onBodyMeasurementSubmit(data);
    }

    inputChangedHandler = (event, inputName) => {
        console.log("[inputChangedHandler]", event.target.value);

        const updatedForm = {...this.state.form};
        const updatedFormElement = {...updatedForm[inputName]};
        updatedFormElement.value = event.target.value;
        updatedForm[inputName] = updatedFormElement;

        this.setState({
            form: updatedForm
        });
    }

    render () {
        return (
            <React.Fragment>
                { this.props.canAddMeasurements ? <Redirect to="/" /> : null }

                <form onSubmit={this.formSubmitHandler}>
                    <h1>Add Measurements</h1>

                    <label>Weight:</label>
                    <input 
                        type="number" 
                        name="weight" 
                        value={this.state.form.weight.value}
                        onChange={(event) => this.inputChangedHandler(event, "weight")} />

                    <label>Body Fat:</label>
                    <input 
                        type="number" 
                        name="bodyFat" 
                        value={this.state.form.bodyFat.value}
                        onChange={(event) => this.inputChangedHandler(event, "bodyFat")} />

                    <Button btnType="Success">Submit</Button>
                </form>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    const today = new Date();
    const dateStamp = today.toDateString();
    return {
        weight: state.bodyMeasurement.measurements[dateStamp].weight,
        bodyFat: state.bodyMeasurement.measurements[dateStamp].bodyFat,
        canAddMeasurements: state.bodyMeasurement.canAddMeasurements
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementSubmit: (data) => dispatch(actions.bodyMeasurementSubmit(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurement);