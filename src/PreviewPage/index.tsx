import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  );
};

export default App;
