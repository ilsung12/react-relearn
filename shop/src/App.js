import React, { useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Jumbotron,
} from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Data from "./data";
import Detail from "./Detail";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <div className="layout">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">ShoeShop</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  {" "}
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/detail">Detail</Link>
                </Nav.Link>
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
        <Switch>
          <Route exact path="/">
            <Jumbotron fluid className="backgound">
              <Container>
                <h1>20% 할인</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
            {/* 상품 - 반응형 */}
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes} i={i} key={i} />;
                })}
              </div>
            </div>
          </Route>

          <Route path="/detail/:id">
            <Detail shoes={shoes}></Detail>
          </Route>
          {/* <Route path="어쩌구" component={Modal}></Route> */}

          <Route path="/:id">
            <div>아무거나 적었을때 이거보여줌</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      ></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
}

export default App;
