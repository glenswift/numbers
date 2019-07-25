import { WidgetConfiguration, WidgetName } from './widgets.types'
import { ActionType } from '../../store/store.types'

export const setConfiguration = (widget: WidgetName, configuration: WidgetConfiguration) => {
  return {
    type: ActionType.SET_WIDGET_CONFIGURATION,
    payload: {
      widget,
      configuration
    }
  }
}