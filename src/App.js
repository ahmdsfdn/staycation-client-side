import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LandingPages from 'pages/LandingPages';
import DetailPages from 'pages/DetailPages';
import Examples from 'pages/Examples'
import Checkout from 'pages/Checkout'

import 'assets/scss/style.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages} />
        <Route exact path="/properties/:id" component={DetailPages} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/examples" component={Examples} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
