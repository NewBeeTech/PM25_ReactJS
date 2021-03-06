import * as initAction from '../actions/InitActions';
import Immutable from 'immutable';

var defaultState = Immutable.Map({
  isFetching: false,
  position: Immutable.Map({
    Latitude: null,
    Longtitude: null,
  }),
  cityName:null,
  error: false,
  errorMessage: null,
});

export default function Init(state=defaultState, action) {
  switch (action.type) {
    case initAction.GET_LOCAL_POSITION_REQUEST:
      return state.set('isFetching', true);
    case initAction.GET_LOCAL_POSITION_SUCCESS:
      return (
          state.set('isFetching', false)
              .setIn(['position', 'Latitude'], action.position.Latitude)
              .setIn(['position', 'Longtitude'], action.position.Longtitude)
              .set('cityName', action.cityName)
            );
    case initAction.GET_LOCAL_POSITION_FAILURE:
      return state.set('isFetching', false)
          .set('error', true)
          .set('errorMessage', '无法获取当前位置');
    default:
      return state;
  }
}
