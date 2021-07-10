import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';

const SocialList = ({ className, classItem, classIcon, color, onClick }) => {
  return (
    <nav className={className}>
      <a className={classItem} target='blank' title='Мы Вконтакте!' href='https://vk.com/' onClick={onClick}>
        <Icons type='vk' className={classIcon} color={color} />
      </a>
      <a className={classItem} target='blank' title='Мы в Facebook!' href='https://www.facebook.com/' onClick={onClick}>
        <Icons type='facebook' className={classIcon} color={color} />
      </a>
      <a className={classItem} target='blank' title='Мы в твиттере!' href='https://twitter.com/' onClick={onClick}>
        <Icons type='twitter' className={classIcon} color={color} />
      </a>
      <a className={classItem} target='blank' title='Мы в инстаграмме' href='https://instagram.com/' onClick={onClick}>
        <Icons type='instagram' className={classIcon} color={color} />
      </a>
    </nav>
  );
};

SocialList.propTypes = {
  className: PropTypes.string.isRequired,
  classItem: PropTypes.string.isRequired,
  classIcon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SocialList.defaultProps = {
  onClick: () => {
    return null;
  },
};

export default SocialList;
