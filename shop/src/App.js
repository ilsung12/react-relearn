import React, { useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Jumbotron,
} from "react-bootstrap";

import "./App.css";
import Data from "./data";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <div className="layout">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron fluid className="backgound">
          <Container>
            <h1>20% 할인</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>

        {/* 상품 정렬 - 반응형 */}
        <div className="container">
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes} i={i} key={i} />;
            })}

            {/* <div className="col-md-4">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              ></img>
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].content}</p>
              <p>{shoes[0].price}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"}
        width="100%"
      ></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
}

export default App;
