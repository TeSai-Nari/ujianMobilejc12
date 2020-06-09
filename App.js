import React from 'react';
import MainNavigation from './src/Navigations/MainNav';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './src/redux/Reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
