import React from 'react'
import { Link } from "react-router-dom"
import error404 from "../../assets/img/error404.jpeg"

function Componente404 (){
        return (
        <div>
            <img src={ error404 } alt="error 404"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
        );
}

export default Componente404;
