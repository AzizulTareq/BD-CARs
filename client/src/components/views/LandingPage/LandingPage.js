import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ProductCard from '../../utils/ProductCard'
import Banner from '../Banner/Banner'
import CheckBox from './brands/CheckBox'
import RadioBox from './brands/RadioBox'
import Search from './brands/Search'

function LandingPage() {

    const [Products, setProducts ] = useState([])                                                                                                                                                                                       
    const [visible, setVisible] = useState(4)
  

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


    const onSeeMore = () => {
        setVisible((previousValue) => previousValue + 4 )
    }

    const handleFilters = (filters, category) => {
        console.log(filters)
    }


    return (
        <div>
            <Banner style={{ width: '100%', margin: '3rem auto' }} />
            <div style={{ width: '90%', margin: '3rem auto' }}>
            
            <div style={{ textAlign: 'center' }}>
                
            </div>

            <Row>
                <Col>
                <CheckBox 
                handleFilters={filters => handleFilters(filters, "brands")}
                />
                </Col>

                <Col>
                <RadioBox 
                handleFilters={filters => handleFilters(filters, "price")}
                />
                </Col>
            </Row>

            
            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <Row>
                    {Products.slice(0, visible).map((product, index) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard key={index} product={product} />
              </Col>
            ))}
                   
                </Row>
            }
            <br></br>

         
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Button onClick={onSeeMore} variant="outline-info">See More</Button>
            </div>
            </div>
            
        </div>
    )
}

export default LandingPage