//import { findByLabelText } from "@testing-library/react";
import React, { useState, useEffect} from "react";
import TopBar from './TopBar';

function CategoriesInDb() {

  const [categories,setCategories] = useState([])
	const apiKey = 'cc5c184f';
	let Search = '' 

	useEffect(() => {
		fetch('/api/categories/',{
			method: 'GET',
			headers:{
				'Content-type': 'application/json'
			}
		})
			.then((response => response.json()))
			.then(data => setCategories(data.data))
			.catch((e) => console.log(e))
	});

  const style = {
    width: '100%',
	};

  return (
    <div style = {style}>
    <TopBar />
    <div className="col-lg-6 mb-4" >
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías
          </h5>
        </div>
        <div className="card-body">
        {categories.length > 0 && categories.map((category, i) => {
          return(
          <div className="row" key={i}>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name}</div>
              </div>
            </div>
          </div>
          )})}
        </div>
      </div>
    </div>
    </div>
  );
}

export default CategoriesInDb;