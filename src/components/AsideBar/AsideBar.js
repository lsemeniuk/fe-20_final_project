import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AsideContainer from '../Container/AsideContainer/AsideContainer';
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
    <AsideContainer>
      <nav>
        <ul>{list}</ul>
      </nav>
    </AsideContainer>
  );
};

AsideBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AsideBar;
