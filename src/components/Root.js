import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import rootSaga from '../sagas';
import configureStore, { sagaMiddleware } from '../store/configureStore';
import initialState from '../store/initialState';

import Splash from './splash';
import Register from './register';
import Login from './login';
import SearchCompany from './search-company';
import CompanyProfile from './company-profile';
import ListCompanies from './list-companies';
import Review from './review';
import { requireAuth } from '../helpers/auth';

const store = configureStore(initialState);
sagaMiddleware.run(rootSaga);

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Splash} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={SearchCompany} onEnter={requireAuth} />
      <Route path="/list" component={ListCompanies} onEnter={requireAuth} />
      <Route path="/company" component={CompanyProfile} onEnter={requireAuth} />
      <Route path="/company/:name" component={CompanyProfile} />
      <Route path="/company/:id/review" component={Review} />
    </Router>
  </Provider>
);

export default Root;
