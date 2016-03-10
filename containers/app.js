import React from 'react';
import {connect} from 'react-redux';

// import actions
// import components
import AppSettings from '../components/AppSettings';

// import MainPageContainer from '../components/MainPage/MainPageContainer';

//import {Router,Route,Link} from 'react-router';
import {LEFT_VIEW_TOGGLE} from '../actions/MainPageActions';

import styles from '../asset/styles/App.css';

import MainPageContainer from './MainPageContainer';
import CitiesSettingsContainer from './CitiesSettingsContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {console.log('this.props', this.props)}
        <MainPageContainer />
        <CitiesSettingsContainer children={this.props.children}/>
      </div>

    );
  }
}

export default App;

//function mapStateToProps(state) {
//    "use strict";
//    return {
//        MainPage: state.MainPage
//    };
//}
//
//export default connect(mapStateToProps)(App);

