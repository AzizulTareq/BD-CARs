import React from 'react'
import { Container, Table } from 'react-bootstrap'

const CarInfo = ({ cardetails }) => {
    return (
        <Container> 
        <Table striped bordered hover>
  <tbody>
  <tr>
      <td>Model</td>
      <td>{cardetails.title}</td>
    </tr>
    <tr>
      <td>Brand</td>
      <td>{cardetails.brand === 1 ? 'Toyota' : 
           cardetails.brand === 2 ? 'Honda' :
           cardetails.brand === 3 ? 'Nissan' : 
           cardetails.brand === 3 ? 'Mitsubishi' :
           cardetails.brand === 3 ? 'Hyundai' :
           cardetails.brand === 3 ? 'Marcedes' :
           cardetails.brand === 3 ? 'Audi' :
           'Others'
      
      
      }</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>{cardetails.price} BDT</td>
    </tr>
    <tr>
      <td>Mileage</td>
      <td>{cardetails.mileage} km</td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>{cardetails.contact}</td>
    </tr>
    <tr>
      <td>Description</td>
      <td style={{textAlign: 'justify'}}>{cardetails.description}</td>
    </tr>
  </tbody>
</Table>
        </Container>
    )
}

export default CarInfo
