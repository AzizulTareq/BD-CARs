import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios'

const Brands = [
  { key: 1, value: "Toyota" },
  { key: 2, value: "Honda" },
  { key: 3, value: "Nissan" },
  { key: 4, value: "Mitsubishi" },
  { key: 5, value: "Hyundai" },
  { key: 6, value: "Marcedes" },
  { key: 7, value: "Audi" }
]

const UploadProductPage = (props) => {

  const [TitleValue, setTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [BrandValue, setBrandValue] = useState(1)
  const [PriceValue, setPriceValue] = useState(0)
  const [MileageValue, setMileageValue] = useState(0)
  const [ContactValue, setContactValue] = useState('+880')
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

const onMileageChange = (event) => {
  setMileageValue(event.currentTarget.value)
}

const onContactChange = (event) => {
  setContactValue(event.currentTarget.value)
}

const onBrandSelectChange = (event) => {
    setBrandValue(event.currentTarget.value)
}

const updateImages = (newImages) => {
  setImages(newImages)
  console.log(newImages)
}

const onSubmit = (event) => {
    event.preventDefault();

    if(!TitleValue || !DescriptionValue || !BrandValue || !PriceValue || 
      !MileageValue || !ContactValue || !Images) {
        return alert('fill all the fields first')
      }
    
    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      mileage: MileageValue,
      contact: ContactValue,
      images: Images,
      brand: BrandValue
    }

    Axios.post('/api/product/uploadProduct', variables)
      .then(response => {
        if(response.data.success) {
            alert('Product Uploader Successfully!')
            props.history.push('/')
        } else {
            alert('Failed to upload product')
        }
      })
}

    return (
        <>
        <Form className="container" onSubmit={onSubmit}>
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

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Mileage (km)</Form.Label>
    <Form.Control type="number" 
    onChange={onMileageChange}
    value={MileageValue}
    placeholder="Mileage" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Contact no</Form.Label>
    <Form.Control type="text" 
    onChange={onContactChange}
    value={ContactValue}
    placeholder="Contact no" />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Brand</Form.Label>
    <Form.Control as="select"
        className="mr-sm-2"
        onChange={onBrandSelectChange} 
        value={BrandValue}
        id="inlineFormCustomSelect"
        custom>
            {Brands.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
      </ Form.Control>
          <br />
          <br />
      <Button variant="info" onClick={onSubmit}>Submit</Button>
  </Form.Group>


</Form>
            
        </>
    )
}

export default UploadProductPage
