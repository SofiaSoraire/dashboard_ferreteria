import React , { useState, useEffect}  from 'react';
import TopBar from './TopBar';


function SearchUsers(){
	const [users,setUsers] = useState([])
	const apiKey = 'cc5c184f';
	let Search = '' 


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
 
	const style = {
		width: '100%',
	};

	return(
		<div style ={style}>
		<TopBar />
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row">
						<div className="col-12">
							<h2>Usuarios:</h2>
						</div>
						{/* Listado de películas */}
						{
							users.length > 0 && users.map((user, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{user.first_name}</h5>
												<h5 className="m-0 font-weight-bold text-gray-800">{user.last_name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={user.image}
														alt={user.email} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>Correo: {user.email}</p>
												<p>Teléfono: {user.phone}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					
					{ users.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
		</div>
	)
}

export default SearchUsers;