import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import Day from './containers/Day/Day';
import AddFood from './containers/AddFood/AddFood';
import AddMeasurements from './containers/AddMeasurements/AddMeasurements';

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/add-food" component={AddFood} />
            <Route path="/add-measurements" component={AddMeasurements} />
            <Route path="/" component={Day} />
          </Switch>
        </Layout>
      </div>
    );
  }
};

export default App;
