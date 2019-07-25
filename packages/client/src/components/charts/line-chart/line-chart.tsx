import * as React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export type LineChartOwnProps = {
  data: number[]
  min: number
  max: number
  threshold: number
}

const LineChart: React.FC<LineChartOwnProps> = ({ data, min, max, threshold }) => {
  const options: Highcharts.Options = {
    title: {
      text: 'Random numbers',
      style: {
        fontWeight: 'bold',
        color: '#ffffff',
      }
    },

    chart: {
      animation: false,
      backgroundColor: '#2d3d4f',
      height: 512,
      margin: 36,
    },

    xAxis: {
      visible: true,
      lineWidth: 1,
      allowDecimals: false,
      lineColor: 'rgba(190, 226, 252, 0.35)',
      gridLineWidth: 1,
      gridLineColor: 'rgba(190, 226, 252, 0.35)',
      tickColor: 'rgba(190, 226, 252, 0.35)',
      labels: {
        enabled: false
      },
      min: 0,
      tickPixelInterval: 70,
      title: null
    },

    yAxis: {
      allowDecimals: false,
      gridLineColor: 'rgba(190, 226, 252, 0.35)',
      labels: {
        style: {
          color: 'rgba(190, 226, 252, 0.35)',
          fontSize: '10px'
        }
      },

      plotLines: [{
        value: Math.min(Math.max(threshold, min), max),
        color: 'red',
        dashStyle: 'ShortDash',
        width: 2,
        label: {
          style: {
            color: '#ffffff'
          },
          text: `threshold -> ${threshold}`
        }
      }],

      offset: -10,
      tickPixelInterval: 35,
      visible: true,
      min,
      max,
      title: null
    },

    legend: {
      enabled: false
    },

    series: [{
      type: 'line',
      stacking: null,
      lineWidth: 3,
      dataLabels: {
        enabled: false
      },
      data
    }]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default LineChart
