import fetch from 'isomorphic-fetch';
import AppInfo from 'json!../AppInfo.json';
export const GET_CITY_INFO_REQUEST = 'GET_CITY_INFO_REQUEST';
export const GET_CITY_INFO_SUCCESS = 'GET_CITY_INFO_SUCCESS';
export const GET_CITY_INFO_FAILURE = 'GET_CITY_INFO_FAILURE';

export function getCityInfoRequest() {
  return ({
    type: GET_CITY_INFO_REQUEST,
  });
}

export function getCityInfoSuccess(cityName, info) {
  return ({
    type: GET_CITY_INFO_SUCCESS,
    cityName: cityName,
    info: info,
  });
}

export function getCityInfoFailure() {
  return ({
    type: GET_CITY_INFO_FAILURE,
  });
}

/**
 * 根据城市名称,获取该城市的环境信息
 * @param cityName 城市名称
 * @returns {Function}
 */
export function getCityInfo(cityName:string) {
  return function (dispatch) {
    dispatch(getCityInfoRequest());

    //120.27.113.239/api/pm2_5?city=北京&avg=true&stations=no
    fetch(AppInfo.webservice_url +
      '/api/pm2_5?' + 'city=' + cityName + '&avt=true' + '&stations=no')
      .then(response => response.json())
      .then(json => {
        console.log('环境信息:...', json);
        if (json[0]) {
          dispatch(getCityInfoSuccess(cityName, json[0]));
        } else {
          dispatch(getCityInfoFailure());
        }
      })
      .catch(()=>dispatch(getCityInfoFailure()));
  };
}
