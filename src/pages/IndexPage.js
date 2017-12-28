import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import TodoList from '../components/TodoList';
import Counter from '../components/Counter';

const Drawer = DrawerNavigator({
  Todo: {
    screen: TodoList,
  },
  Counter: {
    screen: Counter,
  },
});

export default class IndexPage extends React.Component {

  render() {
    return (
      <Drawer screenProps={{ stackNavigation: this.props.navigation }} />
    );
  }

}
