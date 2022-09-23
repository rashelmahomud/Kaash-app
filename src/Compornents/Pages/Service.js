import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Service = ({ service }) => {

    const { img, id, name } = service
    return (
        <CardGroup>
            <Card>
                <Card.Img className='w-100' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-warning btn text-white '>
                    <small className='font-weight-bold'>{name}</small>
                   
                </Card.Footer>
            </Card>
         
         
        </CardGroup>
    );
};

export default Service;