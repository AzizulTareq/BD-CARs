import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import CarImages from './subcomponents/CarImages'

const SingleProduct = ({ match }) => {

    const [singleproduct, setSingleproduct] = useState({})

    useEffect(() => {
        Axios.get(`/api/product/${match.params.id}`)
        .then(response => {
            setSingleproduct(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
  
    }, [])

    return (
        <Container>
            <h3 style={{textAlign: 'center'}}>{singleproduct.title}</h3>
            <Row>
                <Col md={6}>
                    <CarImages details={singleproduct} />
                </Col>
                <Col md={6}>

                </Col>
            </Row>
            
        </Container>
    )
}

export default SingleProduct
