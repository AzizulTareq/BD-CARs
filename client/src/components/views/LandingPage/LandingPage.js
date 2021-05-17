import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {

    const [Products, setProducts ] = useState([])

    useEffect(() => {
        Axios.post('/api/product/getProducts')
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data.products)
                    console.log(response.data.products)
                    console.log('dg')
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
        </div>
    )
}

export default LandingPage
