import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import {Container} from 'semantic-ui-react'

const App = () => {
  return (
    <>
    <NavBar />
    <Container>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      </Container>
    </>
  );
}

export default App;
