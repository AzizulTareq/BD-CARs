import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import { Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../../utils/ProductCard'


function LandingPage() {

    const [Products, setProducts ] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data.products)                    
                } else {
                    alert('Failed to fetch data')
                }
            })
    }, [])


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Find your next car here! </h2>
            </div>
 
            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    {Products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
                   
                </div>
            }
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default LandingPage
