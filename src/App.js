import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import SimpleForm from './component/SimpleForm';
import SubmittedInfo from './component/SubmittedInfo';
import Navbar from './component/Navbar';

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={SimpleForm} />
        <Route exact path="/info" component={SubmittedInfo} />
      </div>
    </Router>
  </Provider>
);
