import reducer from '../../utils/reducer'
import { types } from './actions'

const initState = {
  user: {},
  token: null,
  wait: false,
  exists: false
}

export default reducer(initState, {
  [types.SAVE]: (state, action) => {
    return {
      ...state,
      exists: true,
      wait: false,
      ...action.payload
    }
  },

  [types.CLEAR]: state => {
    return {
      ...state,
      user: {},
      token: null,
      wait: false,
      exists: false
    }
  }
})
