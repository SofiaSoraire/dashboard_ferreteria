import React from 'react';
import image from '../assets/images/LogoFerreteria80x54.png';
import {Link, Route, Routes} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import SearchUsers from './SearchUsers';
import ListProducts from './ListProducts';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import CategoriesInDb from './CategoriesInDb';
import ProductsTable from './ProductsTable';
import UsersTable from './UsersTable';
import NotFound from './NotFound';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Ferreteria"/>
                    </div>
                </Link>

                {/*<!-- Enlaces -->*/}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Etiqueta Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Ferretería</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Productos</div>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastProductInDb">
                        <i className="fas fa-fw fa-info"></i>
                        <span>Detalle último producto creado</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="ListProducts">
                        <i className="fas fa-hammer"></i>
                        <span>Listado de productos</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="ProductsTable">
                        <i className="fas fa-table"></i>
                        <span>Tabla de productos</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
                <div className="sidebar-heading">Categorías</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i class="fas fa-project-diagram"></i>
                        <span>Categorias de la base de datos</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
                <div className="sidebar-heading">Usuarios</div>

                <li className="nav-item">
                    <Link className="nav-link" to="LastUserInDb">
                        <i className="fas fa-fw fa-info"></i>
                        <span>Detalle último usuario creado</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="SearchUsers">
                        <i className="fas fa-user"></i>
                        <span>Listado de usuarios</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="UsersTable">
                        <i className="fas fa-table"></i>
                        <span>Tabla de usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            {/*<!-- Rutas -->*/}

            <Routes>
                <Route exact path="/" element={ <ContentWrapper /> }>
                </Route>

                <Route path="/LastUserInDb" element={ <LastUserInDb /> }> 
                </Route>
                
                <Route path="/SearchUsers" element={ <SearchUsers /> }>
                </Route>

                <Route path="/UsersTable" element={ <UsersTable /> }> 
                </Route>

                <Route path="/CategoriesInDb" element={ <CategoriesInDb /> }> 
                </Route>

                <Route path="/LastProductInDb" element={ <LastProductInDb /> }> 
                </Route>

                <Route path="/ListProducts" element={ <ListProducts /> }> 
                </Route>

                <Route path="/ProductsTable" element={ <ProductsTable /> }> 
                </Route>

                <Route path="*" element={ <NotFound/> } />

            </Routes>


        </React.Fragment>
    )
}
export default SideBar;