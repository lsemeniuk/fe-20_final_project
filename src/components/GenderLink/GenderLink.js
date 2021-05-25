import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './GenderLink.module.scss';
import { PRODUCTS_ROUTE } from '../../utils/consts';

const GenderLink = ({ forWho, img, textContent }) => {
  let className = '';
  if (forWho === 'forMen') {
    className = `${style.forMen}`;
  } else {
    className = `${style.forWoman}`;
  }
  return (
    <div className={style.forWhoLinks}>
      <NavLink to={forWho === 'forMen' ? `${PRODUCTS_ROUTE}/men` : `${PRODUCTS_ROUTE}/women`}>
        <div className={className}>
          <img className={style.img} src={img} alt='link to category' />
          <p>{textContent}</p>
        </div>
      </NavLink>
    </div>
  );
};

GenderLink.propTypes = {
  forWho: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default GenderLink;
