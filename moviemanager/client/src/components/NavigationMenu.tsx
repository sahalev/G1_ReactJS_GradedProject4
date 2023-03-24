import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

/*
const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/"  as={NavLink}>
                    <FontAwesomeIcon
                        icon={faFilm}
                        rotation={270}
                        className="me-2"
                    />
                    Movies on the Tip 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/movies-coming" as ={NavLink}>Upcoming Movies</Nav.Link>
              <Nav.Link href="/movies-in-theatres" as ={NavLink}>Movies in theatres</Nav.Link>
              <Nav.Link href="/top-rated-india" as ={NavLink}>Top-rated-india</Nav.Link>
              <Nav.Link href="/top-rated-movies" as ={NavLink}>Top-rated-movies</Nav.Link>
              <Nav.Link href="/favourite" as ={NavLink}>Favourite</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
*/

const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>
                    <FontAwesomeIcon
                        icon={faFilm}
                        rotation={270}
                        className="me-2"
                    />
                    Movies on the Tip 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/movies-coming" as={NavLink}>Movies Coming</Nav.Link>
                    <Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in Theatres</Nav.Link>
                    <Nav.Link to="/top-rated-india" as={NavLink}>Top Rated India</Nav.Link>
                    <Nav.Link to="/top-rated-movies" as={NavLink}>Top Rated Movies</Nav.Link>
                    <Nav.Link to="/favourite" as={NavLink}>Favourite</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;