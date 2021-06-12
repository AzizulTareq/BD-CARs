import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {
        return (
    
            <Card className='my-3 p-3 rounded'>
              <Card.Img style={{ width: '100%', height: '200px'}} src={`http://localhost:5000/${product.images[0]}`} variant='top' />
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