export const types = {
  SAVE: 'SESSION_SAVE',
  CLEAR: 'SESSION_CLEAR'
}

const actions = {
  save: data => {
    return async dispatch => {
      dispatch({ type: types.SAVE, payload: data })
    }
  },

  clear: () => {
    return async dispatch => {
      dispatch({ type: types.CLEAR })
    }
  }
}

export default actions
