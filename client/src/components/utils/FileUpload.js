import { response } from 'express';
import React from 'react'
import Dropzone from 'react-dropzone'
import { AiFillPlusCircle } from 'react-icons/ai';
import Axios from 'axios'

const FileUpload = () => {

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])
    }

    Axios.post('/api/product/uploadImage', formData, config)
    .then(response => {
        if(response.data.success) {

        }else {
            alert('Failed to save the image')
        }
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple
                maxSize
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '200px', height: '200px', border: '1px solid blue',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}

                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <AiFillPlusCircle style={{ fontSize: '3rem' }} />


                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                <div onClick>
                    <img />
                </div>

            </div>
        </div>
    )
}

export default FileUpload
