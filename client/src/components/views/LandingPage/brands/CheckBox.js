import React, { useState } from 'react'
import { Form, Accordion, Card, Dropdown, Button } from 'react-bootstrap'

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

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

const renderCheckbox = () => {
  return (
    <Form>
    {brands.map((brand) => (
    <div key={brand._id} className="mb-3">
      <Form.Check 
        onChange={() => handleToggle(brand._id)}
        type='checkbox'
        id={brand._id}
        label={brand.name}
      />
        </div>
    ))}
    </Form>
        )
  }

    
    return (
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Brands
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{renderCheckbox()}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}

export default CheckBox
