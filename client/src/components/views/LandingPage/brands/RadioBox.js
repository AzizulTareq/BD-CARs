import React, {useState} from 'react'
import { Form, Accordion, Card, Button } from 'react-bootstrap'

const price = [
    {
        "_id": 0,
        "name": "any",
        "arrary": []
    },
    {
        "_id": 1,
        "name": "TK. 0 to 1500000",
        "arrary": [0, 1500000]
    },
    {
        "_id": 2,
        "name": "TK. 1500001 to 3000000",
        "arrary": [1500001, 3000000]
    },
    {
        "_id": 3,
        "name": "TK. 3000001 to 4500000",
        "arrary": [3000001, 4500000]
    },
    {
        "_id": 4,
        "name": "TK. 4500001 to 6000000",
        "arrary": [4500001, 6000000]
    },
    {
        "_id": 5,
        "name": "TK. 6000001 to 50000000",
        "arrary": [6000001, 50000000]
    }

]

const RadioBox = (props) => {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => {
        return (
            <Form>
                {price.map((value) => (
            <Form.Check 
        type='radio'
        id={`default-radio-${value}`}
        name="action"
        onChange={handleChange}
        value={`${value._id}`}
        label={value.name}
      />
        ))}

            </Form>
        )
                }

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value);
    }

    return (
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Price
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                {renderRadioBox()}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}

export default RadioBox
