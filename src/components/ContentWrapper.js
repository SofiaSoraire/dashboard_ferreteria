import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ProductIndexTable from './ProductIndexTable';
import Footer from './Footer';

function ContentWrapper(){

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop /> {/*<!-- Total de productos, total de usuarios, total de categorias -->*/}
                    <ProductIndexTable />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;