import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import { getModalAuthRegSelector } from '../../store/modal/selectors';
import Loader from '../Loader/Loader';
import { getLinksOperation } from '../../store/links/operations';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { getLinksSelector, linksLoadingSelector } from '../../store/links/selectors';

const DifferentPagesList = ({ classLink, classItem, onClick }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const links = useSelector(getLinksSelector);
  const linksLoading = useSelector(linksLoadingSelector);

  useEffect(() => {
    dispatch(getLinksOperation());
  }, []);

  if (linksLoading) {
    return <Loader />;
  }

  const clientLinks = links.find(e => {
    if (e.title !== 'Клиентам') {
      return false;
    }
    return e;
  });
  const linksList = clientLinks.links.map(i => {
    return (
      <li key={i.url} className={classItem}>
        <NavLink to={i.url} className={classLink} onClick={onClick}>
          {i.description}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      {!isAuth && (
        <li key='enter' className={classItem}>
          <span
            className={classLink}
            onClick={() => {
              dispatch(saveModalAuthRegAction(!modalAuthReg));
              onClick();
            }}
          >
            Вход в личный кабинет
          </span>
        </li>
      )}
      {linksList}
    </>
  );
};

DifferentPagesList.propTypes = {
  classLink: PropTypes.string.isRequired,
  classItem: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

DifferentPagesList.defaultProps = {
  onClick: () => {
    return null;
  },
};

export default DifferentPagesList;
