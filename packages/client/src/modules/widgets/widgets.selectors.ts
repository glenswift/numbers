import { WidgetName } from './widgets.types'
import { StoreState } from '../../store'

export const getConfiguration = (state: StoreState, widget: WidgetName) => {
  if (typeof state.widgets[widget] === 'undefined') {
    throw new Error(`Attempt to get configuration of unknown widget ${widget}`)
  }
  return state.widgets[widget].configuration
}