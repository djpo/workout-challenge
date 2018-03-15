import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/appReducer';
import AppNavigator from './AppNavigator';

const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
