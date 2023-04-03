import React from 'react';
import { NavLink } from 'react-router-dom';
import './Active.css'

const Active = ({to, children}) => {
    return (
        <>
             <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active" : "li" 
                    }
                  >
                    {children}
                  </NavLink>
        </>
    );
};

export default Active;