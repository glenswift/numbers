import { DeepReadonly } from 'utility-types'
import { WidgetName } from './widgets.types'
import { ActionType } from '../../store/store.types'

export type WidgetsState = DeepReadonly<{
  [WidgetName.Numbers]: {
    configuration: {
      threshold: number
    }
  }
}>

export type Action = {
  type: string,
  payload: any
}

const initialState: WidgetsState = {
  [WidgetName.Numbers]: {
    configuration: {
      threshold: 95
    }
  }
}

export default (state: WidgetsState = initialState, action: Action): WidgetsState => {
  const { type, payload } = action

  switch (type) {

    case ActionType.SET_WIDGET_CONFIGURATION:
      return {
        ...state,
        [payload.widget]: {
          configuration: {
            ...state[payload.widget].configuration,
            ...payload.configuration
          }
        }
      }

    default:
      return state
  }
}
