import React from 'react';
import styled from 'styled-components';
import { NavLink, Switch } from 'react-router-dom';
import routes from './routes';
import NavRoutes from './NavRoutes';
import { Wrapper } from '../components';

const NavBarContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background-color: ${({ theme }) => theme.colors.main};
  text-decoration: none;
  display: flex;
  justify-content: center;
  & > ul {
    padding: 0;
    margin-top: 1rem;
    list-style-type: none;
    color: black;
    text-decoration: none !important;
  }
  & * {
    margin-top: 20%;
    text-decoration: none;
    color: black;
  }
`;

const NavBarRouter = styled.div`
  display: flex;
  width: 85vw;
  flex-direction: right;
  margin-left: 5px;
`;

const NavBar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <NavBarContainer>
          <ul>
            {routes.map(({ path, name }) => {
              return (
                <li key={path}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}
          </ul>
        </NavBarContainer>
        <NavBarRouter>
          <React.Suspense fallback={() => <div>Loading...</div>}>
            <Switch>
              <NavRoutes />
            </Switch>
          </React.Suspense>
        </NavBarRouter>
      </Wrapper>
    </>
  );
};

export default NavBar;
