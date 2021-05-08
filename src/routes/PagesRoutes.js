import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import Loader from '../components/Loader/Loader';
import About from '../pages/About/About';
import { getLinksSelector, linksLoadingSelector } from '../store/links/selectors';

const PagesRoutes = () => {
  const links = useSelector(getLinksSelector);
  const linksLoading = useSelector(linksLoadingSelector);

  if (linksLoading) {
    return <Loader />;
  }

  const clientLinks = links.find(e => {
    if (e.title !== 'Клиентам') {
      return false;
    }
    return e;
  });
  return (
    <main>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <AsideBar links={clientLinks.links} />
          <Switch>
            {clientLinks.links.map(({ url }) => (
              <Route key={url} path={url} component={About} exact />
            ))}
          </Switch>
        </div>
      </Container>
    </main>
  );
};

export default PagesRoutes;
