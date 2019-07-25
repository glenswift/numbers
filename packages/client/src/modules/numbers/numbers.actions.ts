import * as io from 'socket.io-client'
import { actions as toastrActions } from 'react-redux-toastr'
import { getConfiguration, WidgetName } from '../widgets'
import { ActionType } from '../../store/store.types'

export const establishConnection = () => dispatch => {
  // INFO: web socket connection management should be placed in separate file / service / class / whatever
  io.connect('http://localhost:4000')
    .on('data', ({ value }: { value: number }) => {
      dispatch(setNumber(value))
    })
}

export const setNumber = (number: number) => (dispatch, getState) => {
  // INFO: well, sorry, just want to save some time, so we'll go with getState here
  const { threshold } = getConfiguration(getState(), WidgetName.Numbers)

  if (number > threshold) {
    dispatch(toastrActions.add({
      type: 'error',
      title: 'Error',
      message: `Got random number ${number}`
    }))
  }

  dispatch({
    type: ActionType.SET_NUMBER,
    payload: { number }
  })
}