import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () =>{
    return(
        <div>
            <NavLink to="/nextpage">ON</NavLink>
            <NavLink to="/">OFF</NavLink>
        </div>
    )
}
export default Navigation;