import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
        return (
            <Card className='my-3 p-3 rounded'>

            <Link to={`/product/${product._id}`}><Card.Img className="imgstyle" style={{ width: '100%', height: '200px'}} src={`http://localhost:5000/${product.images[0]}`} variant='top' /></Link>
              <Card.Body>
              <Link to={`/product/${product._id}`}><h5>{product.title}</h5></Link>
              <Link to={`/product/${product._id}`}><h6>Tk. {product.price}</h6></Link>
              </Card.Body>
            </Card>
      )
}

export default ProductCard