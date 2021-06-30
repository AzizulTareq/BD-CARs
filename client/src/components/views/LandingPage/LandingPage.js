import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ProductCard from '../../utils/ProductCard'
import Banner from '../Banner/Banner'
import loading2 from './loading2.gif'

function LandingPage() {

    const [Products, setProducts ] = useState([])                                                                                                                                                                                       
    const [visible, setVisible] = useState(8)

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
        setVisible((previousValue) => previousValue + 8 )
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
                    <img style={{height: '200px', width: '280px'}} src={loading2} />
                </div> :
                <div>
                    <h2 style={{textAlign: 'center'}}>Best Market Place To Buy & Sell Cars</h2>
                <Row>
                 
                    {Products.slice(0, visible).map((product, index) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard key={index} product={product} />
              </Col>
            ))}
                   
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center'}}>
               <Button onClick={onSeeMore} variant="outline-info">See More</Button>
             </div>
            </div>
 
            }
            
            </div>
            
        </div>
    )
}

export default LandingPage