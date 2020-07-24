import React, {Fragment, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

    // listado de productos
    const [productos, guardarProductos] = useState([
        {id: 1, nombre: 'camisa Reactjs', precio: 50},
        {id: 2, nombre: 'camisa vuejs', precio: 35},
        {id: 3, nombre: 'camisa angular', precio: 60},
        {id: 4, nombre: 'camisa NodeJs', precio: 25},
    ]);

    // state para un carrito de compras
    const [carrito, agregarProducto] = useState([]);

    //obtener fecha
    const fecha = new Date().getFullYear();


    return (
        <Fragment>
            <Header titulo='Tienda Vitual'
                    numero={20}
            />
            <h1>Lista de productos</h1>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    productos={productos}
                    agregarProducto={agregarProducto}
                />
            ))}
            <Carrito
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
            <Footer fecha={fecha}/>
        </Fragment>
    );
}

export default App;
