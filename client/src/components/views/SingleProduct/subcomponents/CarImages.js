import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'

const CarImages = ({ details }) => {
    
    const [Images, setImages] = useState([])

    useEffect(() => {
        if(details.images && details.images.length > 0) {
            let images = [];

            details.images && details.images.map( item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [details])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default CarImages
