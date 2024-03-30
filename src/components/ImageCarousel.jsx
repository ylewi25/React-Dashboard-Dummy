import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const [imageList, setImageList] = useState([
        "./images/CarImg1.jpg",
        "./images/CarImg2.jpg",
        "./images/CarImg3.jpg",
        "./images/CarImg4.jpg"
    ])

    const [direction, setDirection] = useState('right')

    // const maxIndex = imageList.length - 1
    // const minIndex = 0

    const handleRightClick = () => {
        const newArray = [...imageList]
        newArray.unshift(newArray.pop())
        // const element = newArray.splice(maxIndex, 1)
        // newArray.splice(minIndex, 0, element)
        setImageList(newArray)
        setDirection('left')
    }

    const handleLeftClick = () => {
        const newArray = [...imageList]
        newArray.push(newArray.shift())
        // const element = newArray.splice(minIndex, 1)
        // newArray.splice(maxIndex, 0, element)
        setImageList(newArray)
        setDirection('right')
    }

    const getClassName = index => {
        return `carousel-car carousel-car-${index + 1}`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleLeftClick()
        }, 7000)
        return () => clearInterval(interval)
    }, [imageList])
    
  return (
    <div className='image-carousel'>
        <i onClick={handleRightClick} className="ri-arrow-left-wide-line slide-left"></i>
        <div className="list-of-image">
            {imageList.map((image, index) => <img data-direction={direction} key={image} className={getClassName(index)} src={require(`${imageList[index]}`)} alt='car-beauty' />)}
        </div>
        <i onClick={handleLeftClick} className="ri-arrow-right-wide-line slide-right"></i>
    </div>
  )
}

export default ImageCarousel