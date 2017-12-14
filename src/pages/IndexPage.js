import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

@connect(({ todo }) => ({ todo }))
export default class IndexPage extends React.Component {

  static navigationOptions = {
    title: 'Todos',
  };

  render() {
    return (
      <View>
        <TodoList />
      </View>
    );
  }

}
