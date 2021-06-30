import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SingleProduct from '../views/SingleProduct/SingleProduct'

const ProductCard = ({ product }) => {
        return (
            <Card className='my-3 p-3 rounded'>

            <Link to={`/product/${product._id}`}><Card.Img style={{ width: '100%', height: '200px'}} src={`http://localhost:5000/${product.images[0]}`} variant='top' /></Link>
              <Card.Body>
                  <Card.Title as='div'>
                    <strong>{product.title}</strong>
                  </Card.Title>
                <Card.Text as='h3'>${product.price}</Card.Text>
              </Card.Body>
            </Card>
      )
}

export default ProductCard