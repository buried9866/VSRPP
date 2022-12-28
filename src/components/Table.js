import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Table = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <ListGroup as="ul" key={index}>
                <ListGroup.Item as="li">{row.count}</ListGroup.Item>
                <ListGroup.Item>{row.firstName}</ListGroup.Item>
                <ListGroup.Item>{row.lastName}</ListGroup.Item>
                <ListGroup.Item>{row.email}</ListGroup.Item>
                <ListGroup.Item action onClick={() => props.removeCharacter(index)}>Delete</ListGroup.Item>
            </ListGroup>
        );
    });
    return <em>{rows}</em>
}

export default Table;