import React, { useState } from 'react'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import salesDataBar from './dataPerformance.json'

defaults.maintainAspectRatio = false;
defaults.responsive= true;

defaults.plugins.title.display = true
defaults.plugins.title.align = 'start'
defaults.plugins.title.font.size = 20
defaults.plugins.title.color = 'black'

const SalesBarChart = () => {
    const options = {
        plugins: {
          title: {
            text: 'Sales',
            padding: 15
          }
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            border: {
              color: 'transparent'
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false,
              tickColor: 'red'
            },
            ticks: {
              callback: (value) => value >= 1000 ? (value / 1000) + 'K' : value
            },
            border: {
              color: 'transparent'
            }
          }
        }
      }

      const [isClick, setIsClick] = useState(0)

      const timeData = ["Day", "Week", "Month"]

      const handleClick = index => {
        setIsClick(index)
      }

  return (
    <div className='sales-bar-chart'>
        <div className='time'>
            {timeData.map((time, index) => (
                <button key={time} onClick={() => {handleClick(index)}} className={isClick === index ? 'chart-time active' : 'chart-time'}>{time}</button>
            ))}
        </div>
        <Bar data={{
            labels: salesDataBar.map(day => day.label),
            datasets: [
                {
                    label: "Sales",
                    data: salesDataBar.map(data => data.value),
                    backgroundColor: '#4940ff',
                    borderRadius: 10
                },
                {
                    label: "Profit",
                    data: salesDataBar.map(data => data.target),
                    backgroundColor: '#eaedfb',
                    borderRadius: 10
                }
            ]
        }} options={options} />
    </div>
  )
}

export default SalesBarChart