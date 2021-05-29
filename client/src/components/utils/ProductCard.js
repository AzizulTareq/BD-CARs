import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {

    
        return (
    
            <Card className='my-3 p-3 rounded'>
        
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
