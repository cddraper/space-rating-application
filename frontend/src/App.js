// external dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// internal dependencies
import './App.css'
import AuthenticatedRoute from './components/AuthenticatedRoute';
import HomePage from './components/HomePage';
import ManageSpacePage from './components/ManageSpacePage';
import DisplaySpacePage from './components/DisplaySpacePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import DisplayUserPage from './components/DisplayUserPage';
import AboutPage from './components/AboutPage';

const Wrapper = styled.div({
  height: '100vh',
  width: '100vw',
})

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={HomePage} />
          <Route path="/signup" exact component={HomePage} />
          <AuthenticatedRoute path="/spaces/:id" exact component={ManageSpacePage} />
          <Route path="/spaces/view/:id" component={DisplaySpacePage} />
          <AuthenticatedRoute path="/users/:id" component={DisplayUserPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
