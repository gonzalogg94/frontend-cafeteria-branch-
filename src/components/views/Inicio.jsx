import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultarAPI } from "../helpers/queries";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(()=>{

    // opcion 1
    consultarAPI().then((respuesta)=>{
      console.log(respuesta)
      setProductos(respuesta)
    })

    // opcion 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI();
    //   console.log(prueba);
    // }
    // consultaPrueba();

  },[])
  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
      {
            productos.map((producto)=> <CardProducto key={producto.id} producto={producto} setProductos={setProductos}></CardProducto> )
          }
      </Row>
    </Container>
  );
};

export default Inicio;
