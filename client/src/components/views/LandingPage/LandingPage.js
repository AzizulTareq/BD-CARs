import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {

    const [Products, setProducts ] = useState([])

    useEffect(() => {
        axios.post('/api/product/getProducts')
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data.success)
                    console.log(response.data.success)

                } else {
                    alert('Failed to fetch data')
                }
            })
    }, [])

    return (
        <div style={{}}>
        
        </div>
    )
}

export default LandingPage
