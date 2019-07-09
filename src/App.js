// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import navigationHelper from './helpers/navigation';
import Nav from './components/nav';
// import ModalProfile from './modal-profile';
// import ModalPassword from './modal-password';
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

          {/*{ this.props.authentication.status === 'authenticated' ? <div><ModalProfile /><ModalPassword /></div> : null }*/}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication ? state.authentication : null,
    user: state.user ? state.user.user : null
  }
};

export default connect(mapStateToProps)(App);
