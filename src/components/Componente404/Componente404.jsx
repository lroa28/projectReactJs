import React from 'react'
import { Link } from "react-router-dom"

function Componente404 (){
        return (
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/error404.jpeg?alt=media&token=3e735d28-6846-4e3d-99c2-0d491b105599" alt="error 404"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
        );
}

export default Componente404;
