import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const DifferentPagesList = ({ className, classItem }) => {
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
        <NavLink to={i.url} className={className}>
          {i.description}
        </NavLink>
      </li>
    );
  });
  return linksList;
};

export default DifferentPagesList;
