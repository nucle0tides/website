import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Intro = () => (
  <React.Fragment>
    <h1>Gabby Ortman</h1>
    <h4>Software Engineer @ Storable</h4>
    <h6>
      <span>
        <FontAwesomeIcon icon={faMapMarker} />
      </span>
      Kansas City, Missouri
    </h6>
  </React.Fragment>
);

export default Intro;
