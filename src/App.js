import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import dva from './utils/dva';
import models from './models';
import IndexPage from './pages/IndexPage';

const app = dva({ models });

let routerConfig = {
  initialRouteName: 'Index',
};

let Router = StackNavigator({
  Index: { screen: IndexPage },
}, routerConfig);

class App extends Component<{}> {
  render() {
    return (
      <Router ref={(nav) => { GLOBAL.navigation = nav; }} />
    );
  }
}

export default app.start(<App />);
