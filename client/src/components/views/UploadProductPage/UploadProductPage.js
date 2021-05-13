import React, { useState } from 'react'
import { Form, Button, Col, Card, Row } from 'react-bootstrap'
import FileUpload from '../../utils/FileUpload'

const Continents = [
  { key: 1, value: "Toyota" },
  { key: 2, value: "Honda" },
  { key: 3, value: "Nissan" },
  { key: 4, value: "Mitsubishi" },
  { key: 5, value: "Hyundai" },
  { key: 6, value: "Marcedes" },
  { key: 7, value: "Audi" }
]

const UploadProductPage = () => {

  const [TitleValue, setTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [ContinentValue, setContinentValue] = useState(1)
  const [PriceValue, setPriceValue] = useState(0)
  const [Images, setImages] = useState([])
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value)
}

const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value)
}

const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value)
}

const onContinentsSelectChange = (event) => {
    setContinentValue(event.currentTarget.value)
}

const updateImages = (newImages) => {
  setImages(newImages)
  console.log(newImages)
}

    return (
        <>
        <Form className="container">
          <br />
          <br />
        <Card.Title className="text-center">Add A Car To Sell</Card.Title>

<FileUpload refreshFunction={updateImages} />
<br />
<br />
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Car Model</Form.Label>
    <Form.Control type="text" 
    onChange={onTitleChange}
    value={TitleValue}
     placeholder="Enter a car model" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea"
    onChange={onDescriptionChange}
    value={DescriptionValue}
    placeholder="Write the details about the car" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Price (BDT)</Form.Label>
    <Form.Control type="number" 
    onChange={onPriceChange}
    value={PriceValue}
    placeholder="Price" />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Brand</Form.Label>
    <Form.Control as="select"
        className="mr-sm-2"
        onChange={onContinentsSelectChange} 
        value={ContinentValue}
        id="inlineFormCustomSelect"
        custom>
            {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
      </ Form.Control>
  </Form.Group>


</Form>
            
        </>
    )
}

export default UploadProductPage
