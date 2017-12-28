import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import dva from './utils/dva';
import models from './models';
import IndexPage from './pages/IndexPage';
import DrawerLeft from './components/DrawerLeft';

const app = dva({ models });

let routerConfig = {
  initialRouteName: 'Index',
};

let Router = StackNavigator({
  Index: {
    screen: IndexPage,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params && navigation.state.params.title,
      headerLeft: <DrawerLeft onPress={() => navigation.state.params.drawerNavigation.navigate('DrawerToggle')} />,
    }),
  },
}, routerConfig);

class App extends Component<{}> {
  render() {
    return (
      <Router ref={(nav) => { GLOBAL.navigation = nav; }} />
    );
  }
}

export default app.start(<App />);
