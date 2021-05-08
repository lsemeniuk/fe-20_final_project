/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../components/Container/PageContainer/PageContainer';
import { getBrandsOperation } from '../../store/pages/operations';
import { getPageSelector, pageLoadingSelector } from '../../store/pages/selectors';
import Loader from '../../components/Loader/Loader';

const Page = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPageSelector);
  const pageLoading = useSelector(pageLoadingSelector);

  const location = useLocation();
  const arrPath = location.pathname.split('/');
  const customId = arrPath[arrPath.length - 1];

  useEffect(() => {
    dispatch(getBrandsOperation(customId));
  }, [dispatch]);

  return (
    <PageContainer>
      {pageLoading ? <Loader /> : <div dangerouslySetInnerHTML={{ __html: page.htmlContent }} />}
    </PageContainer>
  );
};

export default Page;
