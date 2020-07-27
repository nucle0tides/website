import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Navigation from './Navigation';
import Avatar from './Avatar';
import styles from './App.scss';

const App = () => (
  <Container className={styles.bioContainer}>
    <Row>
      <Col lg={5} className={styles.avatarContainer}>
        <Avatar fluid/>
      </Col>
      <Col lg={7}>
        <div className={styles.aboutMe}>
          <p>Gabby Ortman</p>
          <p>Software Engineer @ Storable</p>
        </div>
      </Col>
    </Row>
    <Navigation />
    <Row>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
    </Row>
  </Container>
);

export default App;
