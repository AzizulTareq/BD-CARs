import React, { useState } from 'react'
import { Form, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'

const brands = [
    {
        "_id": 1,
        "name": "Toyota"
    },
    {
        "_id": 2,
        "name": "Honda"
    },
    {
        "_id": 3,
        "name": "Nissan"
    },
    {
        "_id": 4,
        "name": "Mitsubishi"
    },
    {
        "_id": 5,
        "name": "Hyundai"
    },
    {
        "_id": 6,
        "name": "Marcedes"
    },
    {
        "_id": 7,
        "name": "Audi"
    }
]

const CheckBox = (props) => {

    const [Checked, setChecked] = useState([])

    

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        }else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }


    const renderCheckbox = () => brands.map((value, index) => (
                
                  <Form.Check 
                    custom
                    onChange={() => handleToggle(value._id)}
                    type="checkbox"
                    label={value.name}
                    checked={Checked.indexOf(value._id) === -1 ? false : true}
                  />
            
               
            ))

    return (
        <div>
            {renderCheckbox()}
        </div>
    )
}

export default CheckBox
