import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos en la base de datos",
    valor: 21,
    icono: "fas fa-wrench",
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios en la base de datos",
    valor: 79,
    icono: "fas fa-users",
}

let user = {
    color:   "warning",
    titulo: "Total de categorías en la base de datos",
    valor: 49,
    icono: "fas fa-table",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
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