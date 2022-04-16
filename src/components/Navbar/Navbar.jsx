import React from 'react';
//Components
//import CartWidget from "../CartWidget/CartWidget";
//Particular Css
//import './NavBar.css';
//Routing
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>  
            <nav id='nav'>
                <div className="nav-wrapper">
                    {/* El atributo exact hace que el router busque exactamente la ruta / y no todas las q empiezen con / */}
                    <NavLink to="/" exact className="brand-logo">Coder-Commerce</NavLink>
                    <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    
                </div>
            </nav>
            {/* Mismo menu pero cuando esta colapsado para mobile */}

        </>
    )
};

export default Navbar;