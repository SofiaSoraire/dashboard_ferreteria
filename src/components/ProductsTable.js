import React, { useState, useEffect} from 'react';
import TopBar from './TopBar';

function ProductsTable(){

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
		

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<div>
					<TopBar />
					<h1 className="h3 mb-2 text-gray-800">Tabla de productos</h1>
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio ($)</th>
                                            <th>Marca</th>
											<th>Categoría</th>
										</tr>
									</thead>
									<tbody>
									{products.length > 0 && products.map((product, i) => {
										return(
										<tr key={i}>
											<td>{product.id}</td>
											<td>{product.name}</td>
											<td>{product.description}</td>
                                            <td>{product.price}</td>
											<td>{product.brand.name}</td>
											<td>{product.category.name}</td>
										</tr>
									)})}
									</tbody>
								</table>
							</div>
						</div>
					</div> 
					</div>    
        </React.Fragment>
    )
}
export default ProductsTable;