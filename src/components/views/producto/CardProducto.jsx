import React from "react";
import {Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

const CardProducto = ({ producto}) => {
  return (
    <Card className="mt-5">
      <Card.Img
        variant="top"
        src={producto.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Link  className="btn btn-primary" to={`/detalle-producto/${producto.id}`}>
          Ver mas</Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
