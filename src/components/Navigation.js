import React from "react";
import Nav from "react-bootstrap/Nav";

const Navigation = () => (
  <nav>
    <Nav>
      <Nav.Item>
        <Nav.Link
          href="https://github.com/nucle0tides"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/gabby-ortman"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </nav>
);

export default Navigation;
