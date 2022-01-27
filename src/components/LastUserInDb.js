import React, { useState, useEffect} from 'react';
import TopBar from './TopBar';

function LastUserInDb(){

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

    const style = {
		width: '100%',
	};

    return(
        <div style = {style}>
        <TopBar />
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último usuario cargado en la base de datos:</h5>
                    <h5 className="m-0 font-weight-bold text-gray-800">{usersById.first_name} {usersById.last_name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={usersById.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Teléfono: {usersById.phone}</p>
                    <p>Email: {usersById.email}</p>
                </div>
            </div>
        </div>
        </div> 
    )
}

export default LastUserInDb;
