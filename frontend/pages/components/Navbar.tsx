import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './sidebar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" variant="light" className="navbares">
        <Sidebar />
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
              style={{ marginLeft: "100px", width: "200px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link
                href="/"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
            
              </Nav.Link>
            </Nav>

            <Nav.Link
              href="/Search"
              style={{
                fontFamily: "Sans-serif",
                fontSize: "15px",
                marginRight: "60px",
                textDecoration: "underline",
              }}
            >
              search
            </Nav.Link>

            <Nav.Link href="#action1" style={{ fontFamily: "Sans-serif", fontSize: "15px" }}>
              login
            </Nav.Link>
            <img
              src="https://e7.pngegg.com/pngimages/516/93/png-clipart-computer-icons-user-cart-miscellaneous-symbol.png"
              style={{ marginLeft: "80px", width: "40px", height: "40px" }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
