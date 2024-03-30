import React from 'react'
import performances from './auctionPerformance.json'

const Performance = () => {
  const getArrow = (percent) => {
    const c = percent < 0 ? 'ri-arrow-right-down-line down' : 'ri-arrow-right-up-line up'
    return c
  }

  const getColor = (percent) => {
    const c = percent < 0  ? 'bp down' : 'bp up'
    return c
  }

  function getRevenue(revenue) {
    if (revenue >= 10000) {
      return (revenue / 1000) + 'K';
    } else if (revenue >= 1000) {
      return (revenue / 100) + 'K';
    }
    return revenue
  }

  return (
    <div className='performance'>
        <div className='performance-header'>
          <h1>Auctions Performace</h1>
          <button>View all</button>
        </div>
        <div className='cards'>
          {performances.map(performance => (
            <div className="card" key={performance}>
              <img className='car-img' src={require(`${performance.car}`)} alt="car" />
              <h1 className='car-name'>{performance.code}</h1>
              <small className='bp'>{performance.category}</small>
              <div className="revenue">
                <p className='country-name'>{getRevenue(performance.revenue)}</p>
                <div className="rev-percent">
                  <i className={getArrow(performance.percent)} />
                  <p className={getColor(performance.percent)}>{performance.percent}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Performance