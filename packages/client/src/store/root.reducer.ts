import { combineReducers } from 'redux'
import { reducer as toastr, ToastrState } from 'react-redux-toastr'
import widgets, { WidgetsState } from '../modules/widgets'
import numbers, { NumbersState } from '../modules/numbers'

const rootReducer = combineReducers({
  toastr,
  widgets,
  numbers,
})

export type StoreState = ReturnType<typeof rootReducer>
export default rootReducer
