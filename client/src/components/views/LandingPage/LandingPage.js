import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ProductCard from '../../utils/ProductCard'
import Banner from '../Banner/Banner'

function LandingPage() {

    const [Products, setProducts ] = useState([])                                                                                                                                                                                       
    const [visible, setVisible] = useState(4)

    useEffect(() => {
        Axios.get('/api/product/')
        .then(response => {
            setProducts(response.data)
            //console.log(response.data);
        }).catch((err) => {
            console.log(err)
        })
  
    }, [])


    const onSeeMore = () => {
        setVisible((previousValue) => previousValue + 4 )
    }



    return (
        <div>
            <Banner style={{ width: '100%', margin: '3rem auto' }} />
            <div style={{ width: '90%', margin: '3rem auto' }}>
            
            <div style={{ textAlign: 'center' }}>
        
        <br></br>
            </div>
            
            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <h2 style={{textAlign: 'center'}}>BEST MARKET PLACE TO BUY & SELL CARS</h2>
                <Row>
                    {Products.slice(0, visible).map((product, index) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard key={index} product={product} />
              </Col>
            ))}
                   
                </Row>
                </div>
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