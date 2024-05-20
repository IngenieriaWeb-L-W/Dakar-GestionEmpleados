import React from "react";
import {signIn} from "next-auth/react";


const index = () => {
    return ( <div>
        <button onClick={() => {
            signIn('auth0');
        }}>
            <p className=" dark:text-white">Inicio de Sesión</p>
        </button>
    </div>);
};

export default index;