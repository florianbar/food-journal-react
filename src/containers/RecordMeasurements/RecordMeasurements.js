import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';

class RecordMeasurements extends Component {
    state = {
        form: {
            weight: {
                value: 71
            },
            bodyFat: {
                value: 13.3
            }
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        console.log("[formSubmitHandler]", this.state.form);
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
            <form onSubmit={this.formSubmitHandler}>
                <h1>Record Measurements</h1>

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
        );
    }
};

export default RecordMeasurements;