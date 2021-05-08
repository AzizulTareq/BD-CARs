import React, { useState } from 'react'
import { Form, Button, Col, Card } from 'react-bootstrap'

const UploadProductPage = () => {

    const [PriceValue, setPriceValue] = useState(0)

    return (
        <>
        <Form.Group className="text-center container">
        <Card.Title>Add A Car To Sell</Card.Title>
        <Form.Row>
    <Form.Label column lg={2}>
      Car Model
    </Form.Label>
    <Col>
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Form.Row>  
        <br />
  <Form.Row>
    <Form.Label column lg={2}>
      Description
    </Form.Label>
    <Col>
      <Form.Control as="textarea" rows={3} placeholder="Add a description of the car" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column lg={2}>
      Price (Tk.)
    </Form.Label>
    <Col>
      <Form.Control type="number" value={PriceValue} />
    </Col>
  </Form.Row>
  <br />
      <Form.Row>
      <Form.Label column lg={2}>
      Brand
    </Form.Label>
    <Col>
      <Form.Control as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom>
            <option value="0">Toyota</option>
        <option value="1">Honda</option>
        <option value="2">Mitsubishi</option>
        <option value="3">Nissan</option>
      </ Form.Control>
    </Col>
  
      </Form.Row>
</Form.Group>
      
        </>
    )
}

export default UploadProductPage
