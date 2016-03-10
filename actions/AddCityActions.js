import fetch from 'isomorphic-fetch';
import AppInfo from 'json!../AppInfo.json';

// actions define
export const GET_CITIES_LIST_REQUEST = 'GET_CITIES_LIST_REQUEST';
export const GET_CITIES_LIST_SUCCESS = 'GET_CITIES_LIST_SUCCESS';
export const GET_CITIES_LIST_FAILURE = 'GET_CITIES_LIST_FAILURE';
export const ADD_CITY = 'ADD_CITY';

// actions creator
export function getCitiesListRequest() {
  return {
    type: GET_CITIES_LIST_REQUEST,
  };
};

export function getCitiesListSuccess(cities) {
  return {
    type: GET_CITIES_LIST_SUCCESS,
    cities: cities,
  };
}

export function getCitiesListFailure() {
  return ({
    type: GET_CITIES_LIST_FAILURE,
  });
}

export function getCitiesList() {
  return function (dispatch) {
    dispatch(getCitiesListRequest());
    var result;
    fetch(AppInfo.webservice_url + '/api/cities')
      .then(response => response.json())
      .then(json => {
        console.log('cities list json: ', json);
        if (json.error) {
          //dispatch(getCitiesListFailure())
          // 假数据
          dispatch(getCitiesListSuccess(['北京', '大连']));
        } else {
          dispatch(getCitiesListSuccess(json.cities));
        }

      });
  };
}

export function addCity(cityName) {
  return ({
    type: ADD_CITY,
    addCityName: cityName,
  });
}
