import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Table from './Table';
import Add from './Add';
import NotFound from './NotFound';
import About from './About';
import Edit from './Edit';
import View from './View';
import { BrowserRouter,Switch,Route } from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Table}/>
      <Route exact path="/add" component={Add}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/view/:id" component={View}/>
      <Route  component={NotFound}/>
    </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

