import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Provider } from 'mobx-react'

import NavigationContainer from './navigationContainer'
import AppStore from './appStore'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Provider store={AppStore}>
        <NavigationContainer />
      </Provider>
    );
  }
}
