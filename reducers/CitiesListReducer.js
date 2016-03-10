import immutable from 'immutable';

const citiesListDefault = immutable.Map(
  {
    isFetching: false,
    cities: immutable.List(),
    errorMessage: '',
  }
);

import * as CitiesListActions from '../actions/AddCityActions';

export default function citiesList(state = citiesListDefault, action) {
  switch (action.type) {
    case CitiesListActions.GET_CITIES_LIST_REQUEST:
      return state.set('isFetching', true);
    case CitiesListActions.GET_CITIES_LIST_SUCCESS:
      return state.set('cities', immutable.List(action.cities)).set('isFetching', false);
    case CitiesListActions.GET_CITIES_LIST_FAILURE:
      return state.set('isFetching', false).set('errorMessage', '无法获取城市列表');
    default:
      return state;
  }
};
