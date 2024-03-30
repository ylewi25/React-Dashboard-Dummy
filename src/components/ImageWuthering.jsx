import React, { useState } from 'react'

const ImageWuthering = () => {
    const imageSource = [
        "./images/WW1.jpg",
        "./images/WW2.jpg",
        "./images/WW3.jpg",
        "./images/WW4.jpg"
    ]

    const [isHover, setIsHover] = useState(0)

    const getHover = (index) => {
        setIsHover(index)
    }

    const handleActive = (index) => {
        const c = isHover === index ? 'wuthering-container active' : 'wuthering-container'
        return c
    }

    const getDescription = (index) => {
        const c = isHover === index ? 'wuthering-description active' : 'wuthering-description'
        return c
    }

  return (
    <div className='wuthering-waves'>
        {imageSource.map((image, index) => (
            <div key={image} className={handleActive(index)} onMouseOver={() => getHover(index)}>
                <img className='game-img' src={require(`${image}`)} alt="wuthering" />
                <p className={getDescription(index)}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, beatae!</p>
            </div>
        ))}
    </div>
  )
}

export default ImageWuthering