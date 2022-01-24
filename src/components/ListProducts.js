import React , { useState, useEffect}  from 'react';

function ListProducts(){
	const [products,setProducts] = useState([])
	const apiKey = 'cc5c184f';
	let Search = '' 


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



// FUNCION PARA FILTRAR EN EL ARRAY USERS - No terminada.
//  const searchUsers = (type,date) => {
// 	 let type = formRef.current.value
// 	 if(type == 'email'){
// 			users.filter(user => user.email == date)
// 	 }else{
// 			users.filter(user => user.first_name || user.last_name == date)
// 		}}
 



	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por: <select>
										<option value='name'>Nombre</option>
										<option value='email'>Mail</option>
										</select></label>
									<input type="text" className="form-control" />
								</div>
								<button  className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Buscar productos: {Search}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">Producto: {product.name}</h5>
												<h5 className="m-0 font-weight-bold text-gray-800">Precio: ${product.price}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.image}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
                                                {/*<p>Marca: {product.brand.name}</p>*/}
												<p>Stock disponible: {product.stock}</p>
                                                <p>Categoría: {product.category.name}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default ListProducts;