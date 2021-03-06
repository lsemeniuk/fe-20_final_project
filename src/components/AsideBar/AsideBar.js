import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContainerAside from '../ContainerAside/ContainerAside';
import styles from './AsideBar.module.scss';

const AsideBar = ({ links }) => {
  const list = links.map(link => {
    return (
      <li key={link.url} className={styles.item}>
        <NavLink to={link.url} className={styles.link} activeClassName={styles.linkActive}>
          {link.description}
        </NavLink>
      </li>
    );
  });
  return (
    <ContainerAside>
      <nav className={styles.nav}>
        <ul>{list}</ul>
      </nav>
    </ContainerAside>
  );
};

AsideBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AsideBar;
