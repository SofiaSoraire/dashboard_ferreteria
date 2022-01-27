import React, { useState, useEffect} from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){

    const [products,setProducts] = useState([])
    const [users,setUsers] = useState([])
    const [categories,setCategories] = useState([])

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

    useEffect(() => {
        fetch('/api/users/',{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
            .then((response => response.json()))
            .then(datos => setUsers(datos.data))
            .catch((e) => console.log(e))
    });

    useEffect(() => {
        fetch('/api/categories/',{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
            .then((response => response.json()))
            .then(info => setCategories(info.data))
            .catch((e) => console.log(e))
    });

    let productInDataBase = {
        color:   "primary",
        titulo: "Total de productos en la base de datos",
        valor: products.length,
        icono: "fas fa-wrench",
    }

    
    let amount ={
        color:   "success",
        titulo: "Total de usuarios en la base de datos",
        valor: users.length,
        icono: "fas fa-users",
    }

    let user = {
        color:   "warning",
        titulo: "Total de categorías en la base de datos",
        valor: categories.length,
        icono: "fas fa-table",
    }


    let cardProps = [productInDataBase,amount,user];

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;