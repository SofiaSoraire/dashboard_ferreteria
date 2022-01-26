import React, { useState, useEffect} from 'react';
import TopBar from './TopBar';

function LastProductInDb(){

    const [products,setProducts] = useState([])

    useEffect(() => {

        fetch('/api/products/',{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((response => response.json()))
        .then(data => setProducts(data.data))
        .catch((e) => console.log(e))
    });

    const [productsById,setProductsById] = useState([])

    useEffect(() => {
        const id = products.length
        fetch(`/api/products/${id}`,{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((response => response.json()))
        .then(info => setProductsById(info.data))
        .catch((e) => console.log(e))
    });

    const style = {
		width: '100%',
	};

    return(
        <div style = {style}>
        <TopBar />
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado en la base de datos:</h5>
                    <h5 className="m-0 font-weight-bold text-gray-800">{productsById.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={productsById.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{(productsById.offer === 1) ? '¡Producto en oferta!' : ' '}</p>
                    <p>{(productsById.discount === 1) ? '¡Aproveche este descuento!' : ' '}</p>
                    <p>Precio unitario: ${productsById.price}</p>
                    <p>Stock disponible en unidades: {productsById.stock}</p>
                    <p>Descripción: {productsById.description}</p>
                </div>
            </div>
        </div>
        </div> 
    )
}

export default LastProductInDb;
