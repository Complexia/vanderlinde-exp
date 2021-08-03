import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css'

function NavBar() {
    

    return (
        <Navbar className="navbar-transparent">
            <Navbar.Brand href="/"><h1 className="brand">vanderlinde</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">

            <NavDropdown title="Technology" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Doge Vanderlinde</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shadow Galactic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Multi-currency wallet</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Developers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Documentation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tutorials</NavDropdown.Item>               
            </NavDropdown>

            <Nav.Link href="#blog">Blog</Nav.Link>

                <Navbar.Text className="buttons">
                    
                    
                    
                </Navbar.Text>

            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavBar;

