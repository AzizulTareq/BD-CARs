import React, { useState, useEffect} from 'react'
import Axios from 'axios'

const SingleProduct = ({ match }) => {

    const [single, setSingle] = useState({})

    useEffect(() => {
        Axios.get(`/api/product/${match.params.id}`)
        .then(response => {
            setSingle(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
  
    }, [])

    return (
        <div>
            {single.description}
        </div>
    )
}

export default SingleProduct
