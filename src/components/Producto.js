import React from "react";

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;

    // Agregar producto al carrito
    const selectProduct = (id) => {
        console.log('comprando.... prod->', id);
        const producto = productos.find(prod => prod.id === id);
        agregarProducto([
            ...carrito, producto
        ])
    };

    // Eliminar producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        // colocar los productos en el state
        agregarProducto(productos);
    };

    return (
        <div>
            <h4>Producto:{nombre}</h4>
            <p>Precio:{precio}</p>
            <p>SKU: {id}</p>
            {productos ?
                (
                    <button
                        type="button"
                        onClick={() => selectProduct(id)}
                    >Comprar
                    </button>
                ) :
                (
                    <button
                        type="button"
                        onClick={() => eliminarProducto(id)}
                    >Eliminar
                    </button>
                )
            }
        </div>
    );
};


export default Producto;