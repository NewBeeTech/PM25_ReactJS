require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import fetchJsonp from 'fetch-jsonp';
import AppInfo from 'json!../AppInfo.json';

//import $  from 'jQuery';
import $ from 'jquery';

// cities actions
import * as CitiesSettingsActioins from './CitiesSettingsActions';
import * as AddCityActions from './AddCityActions';
import * as GetCityInfoActions from './GetCityInfoActions';

export const GET_LOCAL_POSITION_REQUEST = 'GET_LOCAL_POSITION_REQUEST';
export const GET_LOCAL_POSITION_SUCCESS = 'GET_LOCAL_POSITION_SUCCESS';
export const GET_LOCAL_POSITION_FAILURE = 'GET_LOCAL_POSITION_FAILURE';

export function getLocalPosition() {
  'use strict';
  return function (dispatch) {
    dispatch(getLocalPositionRequest());
    if (navigator.geolocation) {
      var watchID = navigator.geolocation.watchPosition(

        // success callback
        position => {
          navigator.geolocation.clearWatch(watchID);
          let pos = {
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude,
          };
          console.log('..pos..', pos);

          //dispatch(get_local_position_success(pos));
          let callback = (pos, city) => {
            dispatch(getLocalPositionSuccess(pos, city));
            dispatch(CitiesSettingsActioins.setPreferedCity(city));
            dispatch(AddCityActions.addCity(city));

            //开始获取该城市的环境信息
            dispatch(GetCityInfoActions.getCityInfo(city));
          };

          // 根据获取的地理位置,设置初始城市信息
          _getPositionCityName(pos, callback);
        },

        // failure callback
        () => dispatch(getLocalPositionFailure())
      );
    } else {
      dispatch(getLocalPositionFailure());
    }
  };
}

function result(data) {
  console.log(data);
}

/**
 * 根据获取的地理位置,设置初始城市信息
 * @param position 坐标
 * @param callback
 * @private
 */
function _getPositionCityName(position, callback) {
  var cityName = '';
  let query = {
    ak: AppInfo.baidu_ak,
    location: position.Latitude + ',' + position.Longitude,
    output: 'json',
    callback: 'result',
  };

  fetchJsonp('http://api.map.baidu.com/geocoder/v2/?' + $.param(query), {
    mode: 'cors',
  })
    .then(response => response.json())
    .then(json => {
      console.log(json.result.addressComponent.city);
      let cityName = json.result.addressComponent.city;

      // 百度API返回的城市名以'市'结尾,要去掉
      if (cityName.includes('市')) {
        cityName = cityName.slice(0, -1);
      }

      callback(position, cityName);

      //dispatch(get_local_position_success(pos,cityName))
    });

}

export function getLocalPositionRequest() {
  return {
    type: GET_LOCAL_POSITION_REQUEST,
  };
}

/**
 *
 * @param position
 */
export function getLocalPositionSuccess(position, cityName) {
  console.log('success......', position, cityName);
  return {
    type: GET_LOCAL_POSITION_SUCCESS,
    position: position,
    cityName: cityName,
  };
}

export function getLocalPositionFailure() {
  return {
    type: GET_LOCAL_POSITION_FAILURE,
  };
}

