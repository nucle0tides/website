import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Intro from './Intro';
import Navigation from './Navigation';
import Avatar from './Avatar';
import './theme.scss';
import styles from './App.scss';

const App = () => (
  <Container className={styles.bioContainer}>
    <header>
      <Row>
        <Col md={12} lg={5} className={styles.avatarContainer}>
          <Avatar fluid/>
        </Col>
        <Col md={12} lg={7}>
          <div className={styles.intro}>
            <Intro />
          </div>
        </Col>
      </Row>
    </header>
    <Row className={styles.navigationContainer}>
      <Navigation />
    </Row>
    <Row>
      <main>
        <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ante nec orci ullamcorper rhoncus. Donec maximus ut orci maximus suscipit. Nam eget efficitur justo, sit amet vestibulum libero. Morbi eget sem at nisi tristique lobortis sed vel ante. Praesent lacus dolor, ullamcorper sed tellus sit amet, viverra efficitur nibh. Suspendisse potenti. Integer vitae sapien imperdiet, rutrum magna eu, fringilla augue. Sed ex elit, rhoncus ac ullamcorper et, maximus at massa. In hac habitasse platea dictumst. Proin sit amet erat dignissim mi gravida mattis.
      </main>
    </Row>
  </Container>
);

export default App;
