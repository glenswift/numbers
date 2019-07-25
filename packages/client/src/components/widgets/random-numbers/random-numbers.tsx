import * as React from 'react'
import { WidgetConfiguration, WidgetName } from '../../../modules/widgets'
import LineChart from '../../charts/line-chart'
import { establishConnection } from '../../../modules/numbers'

export type RandomNumbersOwnProps = {
  numbers: number[],
  configuration: WidgetConfiguration
}

export type RandomNumbersDispatchProps = {
  establishConnection: () => ReturnType<typeof establishConnection>
  setConfiguration: (widget: WidgetName, configuration: WidgetConfiguration) => void
}

export type RandomNumbersProps = RandomNumbersOwnProps & RandomNumbersDispatchProps

export default class RandomNumbers extends React.Component<RandomNumbersProps> {
  static MIN = -100
  static MAX = 100

  componentDidMount(): void {
    this.props.establishConnection()
  }

  handleConfigurationChange = (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
    this.props.setConfiguration(WidgetName.Numbers, { [key]: +e.currentTarget.value })
  }

  render() {
    const { numbers, configuration } = this.props

    return (
      <div>
        <div>
          <LineChart data={numbers} min={RandomNumbers.MIN} max={RandomNumbers.MAX} threshold={configuration.threshold}/>
        </div>
        <div>
          <input
            type='range'
            value={configuration.threshold}
            onChange={this.handleConfigurationChange('threshold')}
            min={RandomNumbers.MIN}
            max={RandomNumbers.MAX}
            step={1}
          />
        </div>
      </div>
    )
  }
}

