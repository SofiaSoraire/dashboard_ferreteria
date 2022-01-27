import React, { useState, useEffect} from 'react';
import TopBar from './TopBar';

function UsersTable(){

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
        <React.Fragment>
					<div style ={style}>
		            <TopBar />
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Tabla de usuarios</h1>
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                            <th>Teléfono</th>
										</tr>
									</thead>
									<tbody>
									{users.length > 0 && users.map((user, i) => {
										return(
										<tr key={i}>
											<td>{user.id}</td>
											<td>{user.first_name}</td>
											<td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
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
export default UsersTable;