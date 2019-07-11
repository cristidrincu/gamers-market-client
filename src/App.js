import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import navigationHelper from './helpers/navigation';
import Nav from './components/nav';
import Utils from './services/Utils';

class App extends Component {
  componentWillMount = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('authenticationToken');
    axios.defaults.baseURL = Utils.getEnvironmentApi(process.env.NODE_ENV);
    navigationHelper(this.props.dispatch);
    browserHistory.listen(() => {
      navigationHelper(this.props.dispatch);
    });
  };

  componentDidUpdate = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('authenticationToken');
  };

  render() {
    return (
        <div className="w-100 h-100">
          <Nav {...this.props} />
          { React.cloneElement(this.props.children, this.props) }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication ? state.authentication : null,
    user: state.user ? state.user.gamer : null
  }
};

export default connect(mapStateToProps, null)(App);
