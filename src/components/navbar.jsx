import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./navbar.css"

const Navbar = () => {
    const state = useSelector(state => state.cart)
    return (
        // <nav className="nav">
            <div className="nav">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Avy's eCommerce Website</NavLink>
                {/* <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="comp">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="nav-item"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="nav-item"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="nav-item"></i> Cart ({state.length}) </NavLink>
                </div>


            </div>
        // </nav>
    )
}

export default Navbar