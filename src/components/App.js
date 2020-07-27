import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Sidebar from './Sidebar';
import styles from './App.scss';

const App = () => (
  <Container fluid>
    <Row>
      <Col sm="12" md="2" lg="2" className={styles.sidebarContainer}>
        <Sidebar />
      </Col>
      <Col sm="12" md="10" lg="10">
        <Container className={styles.bioContainer}>
          <Row>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
          </Row>
          <Row>
            <Nav>
              <Nav.Item>
                <Nav.Link>a</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>a</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>a</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default App;
