import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveModalAuthRegAction } from '../../../store/modal/actions';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import Loader from '../../Loader/Loader';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';

const DifferentPagesList = ({ classLink, classItem }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getCustomerIsAuthSelector);
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const [links, setLinks] = useState({});
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    axios.get('../../links.json').then(res => {
      setLinks(res.data[0].links);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const linksList = links.map(i => {
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
