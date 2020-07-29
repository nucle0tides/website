import React from 'react';
import Avatar from './Avatar';
import styles from './Sidebar.scss';

const Sidebar = () => (
  <React.Fragment>
    <div className={styles.avatarContainer}>
      <Avatar />
    </div>
    <span>Gabby Ortman</span>
  </React.Fragment>
);

export default Sidebar;
