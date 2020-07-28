import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <nav>
      <Nav>
        <Nav.Item>
          <Nav.Link href="https://github.com/nucle0tides">
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://gitlab.com/nucle0tides">
            GitLab
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://keybase.io/gabbyortman">
            Keybase
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default Navigation;
