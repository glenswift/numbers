import { ActionType } from '../../store/store.types'

export type NumbersState = Readonly<{
  list: number[]
}>

export type Action = {
  type: string,
  payload: any
}

const initialState: NumbersState = {
  list: []
}

export default (state: NumbersState = initialState, action: Action): NumbersState => {
  const { type, payload } = action

  switch (type) {
    case ActionType.SET_NUMBER:
      return {
        ...state,
        list: [...state.list, payload.number].slice(-50)
      }

    default:
      return state
  }
}