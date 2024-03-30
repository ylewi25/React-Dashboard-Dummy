import React, { useState } from 'react'
import photo from '../artist.jpg'
import car from '../Car.jpg'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import sourceData from './sourceData.json'
import Sales from './Sales'
import Performance from './Performance'
import SalesBarChart from './SalesBarChart'
import ImageCarousel from './ImageCarousel'
import ImageWuthering from './ImageWuthering'

defaults.maintainAspectRatio = false;
defaults.responsive= true;
defaults.plugins.title.display = true
defaults.plugins.title.align = 'start'
defaults.plugins.title.font.size = 20
defaults.plugins.title.color = 'black'

const Main = ({getTitle}) => {
  const options = {
    plugins: {
      legend: false,
      title: {
        text: 'Your listing views',
        padding: 15
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          padding: 0
        },
        grid: {
          display: false
        },
        border: {
          color: 'transparent'
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          callback: (value) => value >= 1000 ? (value / 1000) + 'K' : value,
          padding: 10
        },
        border: {
          color: 'transparent'
        }
      }
    }
  }

  const timeContent = ['Day', 'Week', 'Year']

  const [isClicked, setIsClicked] = useState(1)

  const handleClick = (index) => {
    setIsClicked(index)
  }

  return (
    <div className='main'>
        <header className='main-top'>
            <h1 className='main-title'>{getTitle}</h1>
            <div className='right'>
                <div className="search-box">
                    <input spellCheck="false" type="text" placeholder='Search' />
                    <i className="ri-search-line"></i>
                </div>
                <i className="ri-notification-3-line bell"></i>
                <img className='photo-profile' src={photo} alt="" />
                <i className="ri-arrow-down-s-line arrow-down"></i>
            </div>
        </header>

        <div className='accessories'>
          <img src={car} alt="car" />
          <h1 className='acc-title'>We updated our cancelation policy to ensure the user experience</h1>
          <small>Learn more details on our latest blog post</small>
          <a className='explore-btn' href='https://www.google.com/'>Explore updates</a>
        </div>
        <div className="sales-whole-container">
          <div className='sales-chart'>
            <div className='time'>
                {timeContent.map((time, index) => (
                  <button key={time} onClick={() => {handleClick(index)}} className={isClicked === index ? 'chart-time active' : 'chart-time'}>{time}</button>
                ))}
            </div>
            <Line data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Volume",
                  data: sourceData.map((data) => data.value),
                  borderColor: '#4940ff',
                  backgroundColor: 'transparent',
                  fill: {
                    target: 'origin',
                    above: '#eaedfb'
                  },
                  pointBackgroundColor: 'transparent',
                  pointBorderColor: 'transparent',
                  pointHoverBackgroundColor: '#4940ff'
                }
              ]
            }} options={options} />
          </div>
          <div className="sales-volume">
            <div className="top">
              <h1>Sales Volume</h1>
              <i className="ri-more-2-line sales-dot"></i>
            </div>
            <div className="sales-content">
              <Sales />
            </div>
          </div>
        </div>
        <div className='performance-whole-container'>
          <Performance />
          <SalesBarChart />
        </div>
        <ImageCarousel />
        <ImageWuthering />
    </div>
  )
}

export default Main