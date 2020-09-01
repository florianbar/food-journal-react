import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/bodyMeasurement';

import Button from '../../components/UI/Button/Button';

class AddMeasurement extends Component {
    state = {
        form: {
            weight: {
                value: 0
            },
            bodyFat: {
                value: 0
            }
        }
    }

    componentDidMount () {
        if (this.props.measurements && this.props.measurements[this.props.dateStamp]) {
            this.setState({
                form: {
                    weight: {
                        value: this.props.measurements[this.props.dateStamp].weight
                    },
                    bodyFat: {
                        value: this.props.measurements[this.props.dateStamp].bodyFat
                    }
                }
            });
        }
    }

    backButtonHandler = () => {
        this.props.history.push("/");
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            weight: parseFloat(this.state.form.weight.value),
            bodyFat: parseFloat(this.state.form.bodyFat.value)
        };

        this.props.onBodyMeasurementSubmit(this.props.dateStamp, data);
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
        let form = <Redirect to="/" />;
        
        if (this.props.measurements && this.props.measurements[this.props.dateStamp]) {
            form = (
                <div>
                    <Button 
                        btntype="secondary" 
                        btnsize="sm" 
                        clicked={this.backButtonHandler}>Back</Button>

                    <form onSubmit={this.formSubmitHandler}>
                        <h1>Add Measurement</h1>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Weight</label>
                            <div className="input-group mb-3">
                                <input 
                                    className="form-control"
                                    type="number" 
                                    name="weight" 
                                    value={this.state.form.weight.value}
                                    onChange={(event) => this.inputChangedHandler(event, "weight")} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">kg</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Body Fat</label>
                            <div className="input-group mb-3">
                                <input 
                                    className="form-control"
                                    type="number" 
                                    name="bodyFat" 
                                    value={this.state.form.bodyFat.value}
                                    onChange={(event) => this.inputChangedHandler(event, "bodyFat")} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">%</span>
                                </div>
                            </div>
                        </div>                        

                        <Button>Submit</Button>
                    </form>
                </div>
            );
        }

        return (
            <React.Fragment>
                { this.props.canAddMeasurements ? <Redirect to="/" /> : null }
                {form}
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        dateStamp: state.day.todayDateStamp,
        measurements: state.bodyMeasurement.measurements,
        canAddMeasurements: state.bodyMeasurement.canAddMeasurements
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementSubmit: (id, data) => dispatch(actions.bodyMeasurementSubmit(id, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurement);