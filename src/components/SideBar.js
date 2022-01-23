import React from 'react';
import image from '../assets/images/LogoFerreteria80x54.png';
import {Link, Route, Routes} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import SearchUsers from './SearchUsers';
import LastMovieInDb from './LastMovieInDb';
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
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastMovieInDb">
                        <i className="fas fa-fw fa-info"></i>
                        <span>Detalle último producto creado</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-chart-pie"></i>
                        <span>Productos por categoria</span>
                    </Link>
                </li>

                {/*<!-- Busqueda de usuarios -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="SearchUsers">
                        <i className="fas fa-user"></i>
                        <span>Listado de usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="fas fa-hammer"></i>
                        <span>Listado de productos</span>
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
                
                <Route path="/SearchUsers" element={ <SearchUsers /> }>
                </Route>

                <Route path="/LastMovieInDb" element={ <LastMovieInDb /> }> 
                </Route>

                <Route path="*" element={ <NotFound/> } />

            </Routes>


        </React.Fragment>
    )
}
export default SideBar;