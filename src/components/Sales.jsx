import React from 'react'
import salesData from './salesDataSource.json'

const Sales = () => {
    const getArrow = (percent) => {
        const c = percent < 0 ? 'ri-arrow-right-down-line down' : 'ri-arrow-right-up-line up'
        return c
    }

    const getColor = (percent) => {
        const c = percent < 0  ? 'bp down' : 'bp up'
        return c
    }

    const dataNumber = (value) => {
        const c = value > 10000 ? (value / 1000) + 'K' : value
        return c
    }

    const getPercent = (percent) => {
        let c = percent < 0 ? percent.toString().slice(1) : percent
        return c
    }

  return (
    <div className='sales-volume-container'>
        {salesData.map(data => (
            <div className='sales-entire' key={data}>
                <img className='country-flag' src={require(`${data.flag}`)} alt='flag' />
                <div className='sales-container'>
                    <p className="country-name">{data.country}</p>
                    <small className='bp'>BP {data.bp}</small>
                </div>
                <div className='sales-container'>
                    <p className="country-name">{dataNumber(data.value)}</p>
                    <div className='arrow-number'>
                        <i className={getArrow(data.percent)} />
                        <small className={getColor(data.percent)}>{getPercent(data.percent)}%</small>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Sales