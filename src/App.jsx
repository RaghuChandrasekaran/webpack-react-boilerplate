import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout/Layout.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Layout />;
  }
}

export default hot(module)(App);
