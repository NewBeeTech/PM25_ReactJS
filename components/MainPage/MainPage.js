/**
 *  组件: 主界面
 *  描述: 展示环境信息
 *  创建时间: 2016-1-11
 */

import React from 'react';
var MediaQuery = require('react-responsive');

import styles from '../../asset/styles/MainPage/style.css';

import Navigator from './Navigator';
import InitPage from '../common/InitPage';
import CityPanel from './CityPanel';

class  MainPage extends React.Component{
    constructor(props) {
      super(props);
      this.props.getLocalPosition();
    }

    leftToggle() {
      return this.props.left_toggle;
    }

    render() {
      return (
          <div className={this.leftToggle() ? 'MainPage_transform' : 'MainPage_default'}>
            <Navigator left_toggle_action={this.props.left_toggle_action}/>
              <div className="container city_panel_container">
                <CityPanel Cities={this.props.citiesProps}/>
              </div>
          </div>
      );
    }
}

export default MainPage;

