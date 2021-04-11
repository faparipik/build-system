import React from 'react';
import { Route } from 'react-router';
import routes from './routes';

const NavRoutes: React.FC = () => {
  return (
    <>
        {routes.map(({ path, Component }) => {
          return <Route path={path} exact component={Component} />;
        })}
    </>
  );
};

export default NavRoutes;
