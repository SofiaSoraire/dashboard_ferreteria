import React from 'react';

function Footer(){

	const style = {
		color: 'white',
	};


    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span style = {style}>Copyright &copy; Dashboard 2022</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;