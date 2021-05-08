import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveModalAuthRegAction } from '../../../store/modal/actions';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import Loader from '../../Loader/Loader';
import { getLinksOperation } from '../../../store/links/operations';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';
import { getLinksSelector, linksLoadingSelector } from '../../../store/links/selectors';

const DifferentPagesList = ({ classLink, classItem }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getCustomerIsAuthSelector);
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
        <NavLink to={i.url} className={classLink}>
          {i.description}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      {!isLogin && (
        <li key='enter' className={classItem}>
          <span
            className={classLink}
            onClick={() => {
              dispatch(saveModalAuthRegAction(!modalAuthReg));
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
};

export default DifferentPagesList;
