import React from "react";
import {signIn} from "next-auth/react";


const index = () => {
    return ( <div>
        <button onClick={() => {
            signIn('auth0');
        }}>
            Inicio de Sesión
        </button>
    </div>);
};

export default index;