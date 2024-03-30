import React, { useState } from 'react'

const SideBar = ({getMenuBar, getTitle}) => {
    const finderBar = [
        {logo: 'ri-search-line', content: 'Find Vehicle'},
        {logo: 'ri-bookmark-fill', content: 'Saved'},
        {logo: 'ri-time-fill', content: 'Active Bids'}
    ]

    const [isChosen, setIsChosen] = useState(0)

    const handleChosen = (index, title) => {
        setIsChosen(index)
        getTitle(title)
    }

    const getClassName = (index) => {
        const c = isChosen === index ? 'menu-item chosen' : 'menu-item'
        return c
    }

  return (
    <div className='sidebar-container'>
        <h1 className='web-title'>LOGO</h1>
        <small className='menu-category'>Auctions</small>
        <ul className='menu-lists'>
            {getMenuBar.map((menu, index) => <li onClick={() => handleChosen(index, menu.content)} className={getClassName(index)} key={menu.content}><i className={menu.logo}></i><p>{menu.content}</p></li>)}
        </ul>
        <small className='menu-category'>Vehicle Finder</small>
        <ul className='menu-lists'>
            {finderBar.map(menu => <li className='menu-item' key={menu.content}><i className={menu.logo}></i><p>{menu.content}</p></li>)}
        </ul>
        <div className="cart-box">
            <i className="ri-shopping-cart-fill"></i>
            <h1>Enterprise Team</h1>
            <small>a new way to buy modern and sell old cars</small>
            <button>Sell you car</button>
        </div>
    </div>
  )
}

export default SideBar