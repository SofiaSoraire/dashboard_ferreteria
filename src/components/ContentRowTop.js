import React, { useState, useEffect} from 'react';
import ContentRowMovies from './ContentRowMovies';

function ContentRowTop(){

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

	const [users,setUsers] = useState([])

    useEffect(() => {

        fetch('/api/users/',{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((response => response.json()))
        .then(data => setUsers(data.data))
        .catch((e) => console.log(e))
    });

    const [usersById,setUsersById] = useState([])

    useEffect(() => {
        const id = users.length
        fetch(`/api/users/${id}`,{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((response => response.json()))
        .then(info => setUsersById(info.data))
        .catch((e) => console.log(e))
    });

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">¡Bienvenidos al dashboard de la Ferretería!</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado: {productsById.name}</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={productsById.image} alt=" Star Wars - Mandalorian "/>
									</div>
									{/*<p>Marca: {product.brand.name}</p>*/}
									<p>Precio: ${productsById.price}</p>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}
						
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último usuario cargado: {usersById.first_name} {usersById.last_name}</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={usersById.image} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Correo: {usersById.email}</p>
								</div>
							</div>
						</div>
						{/*<!-- Genres in DB -->*/}
						

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

			

        </React.Fragment>
    )

}
export default ContentRowTop;