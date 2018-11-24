import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import Navigation from "./components/navigation";
import Element1 from "./components/element1";
import Element2 from "./components/element2";
import Element3 from "./components/element3";
import Element4 from "./components/element4";
import Element5 from "./components/element5";
import Element6 from "./components/element6";
import Element7 from "./components/element7";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Element1 />
      <Element2 />
      <Element3 />
      <Element4 />
      <Element5 />
      <Element6 />
      <Element7 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
