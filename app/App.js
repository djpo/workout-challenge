import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/appReducer';
import ScreenPlaceholder from './ScreenPlaceholder';

const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenPlaceholder />
      </Provider>
    );
  }
}
