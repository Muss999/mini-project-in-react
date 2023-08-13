import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
    return (
        <>
            <Navbar className="navbar1" data-bs-theme="dark">
                <Container className="d-flex justify-content-center">
                    <NavLink to="/">
                        <button
                            type="button"
                            className="btn btn-light mx-3 navbar-btns border-0"
                        >
                            Home
                        </button>
                    </NavLink>
                    <NavLink to="/add">
                        <button
                            type="button"
                            className="btn btn-light mx-3 navbar-btns border-0"
                        >
                            Add
                        </button>
                    </NavLink>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
