import { connect } from 'react-redux'
import { establishConnection } from '../../../modules/numbers'
import RandomNumbers, { RandomNumbersDispatchProps, RandomNumbersOwnProps } from './random-numbers'
import { getConfiguration, setConfiguration } from '../../../modules/widgets'
import { WidgetName } from '../../../modules/widgets'
import { StoreState } from '../../../store'

const mapStateToProps = (state: StoreState): RandomNumbersOwnProps => {
  return {
    configuration: getConfiguration(state, WidgetName.Numbers),
    numbers: state.numbers.list
  }
}

const mapDispatchToProps = {
  establishConnection,
  setConfiguration
}

export default connect<RandomNumbersOwnProps, RandomNumbersDispatchProps>(mapStateToProps, mapDispatchToProps)(RandomNumbers)
