import React, { Component } from 'react';
import classes from './App.css';
import Layout from './HOC/Layout/layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
