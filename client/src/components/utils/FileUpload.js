
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { AiFillPlusCircle } from 'react-icons/ai';
import Axios from 'axios'

const FileUpload = (props) => {

    const [Images, setImages] = useState([]);

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data'}
        }
        formData.append("file"  , files[0])
    

    Axios.post('/api/product/uploadImage', formData, config)
    .then(response => {
        if(response.data.success) {

            setImages([...Images, response.data.image])
            props.refreshFunction([...Images, response.data.image])
        
        }else {
            alert('Failed to save the image')
        } 
    })
    }

    const onDelete = (image) => {
        const imageIndex = Images.indexOf(image)

        let newImages = [...Images]
        newImages.splice(imageIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '100px', height: '100px', border: '1px solid blue',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}

                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <AiFillPlusCircle style={{ fontSize: '2rem' }} />
                    </div>
                )}
            </Dropzone>
            <p>Upload Images</p>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{minWidth: '300PX', width: '300px', height: '240px', border: '10px' }} src={`HTTP_PROXY/${image}`} alt={`productImg-${index}`} />
                        <br />
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default FileUpload
