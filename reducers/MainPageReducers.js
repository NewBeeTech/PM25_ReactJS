import {LEFT_VIEW_TOGGLE} from '../actions/MainPageActions';

function MainPageReducers(state={ left_toggle: false,
    right_toggle: false, }, action) {
  'use strict';

  switch (action.type) {
    case LEFT_VIEW_TOGGLE:
      return Object.assign({}, state, {
        left_toggle: !state.left_toggle,
      });
    default:
      return state;
  }
}

export default MainPageReducers;
