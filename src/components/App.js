import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Intro from './Intro';
import Navigation from './Navigation';
import Avatar from './Avatar';
import AboutMe from './AboutMe';
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
    <Row className={styles.aboutMeContainer}>
      <main>
        <AboutMe />
      </main>
    </Row>
  </Container>
);

export default App;
