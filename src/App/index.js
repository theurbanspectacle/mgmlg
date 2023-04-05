import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { history } = this.props
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      history.push(route);
    }
  }
  
  render() {
    return (
      <div className="app">
        YEEHAW
      </div>
    );
  }
};

export default withRouter(App);