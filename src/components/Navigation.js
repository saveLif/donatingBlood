import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Save a life by donating your blood
            </NavLink>
        </div>
    );

};

export default Navigation;