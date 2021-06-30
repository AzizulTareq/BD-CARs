import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'

const CarImages = ({ cardetails }) => {
    
    const [Images, setImages] = useState([])

    useEffect(() => {
        if(cardetails.images && cardetails.images.length > 0) {
            let images = [];

            cardetails.images && cardetails.images.map( item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [cardetails])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default CarImages
