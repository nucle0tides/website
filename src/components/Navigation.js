import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <nav>
      <Nav>
        <Nav.Item><Nav.Link>GitHub</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>GitLab</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>Keybase</Nav.Link></Nav.Item>
      </Nav>
    </nav>
  );
};

export default Navigation;
