import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

@connect(({ todo }) => ({ todo }))
export default class IndexPage extends React.Component {

  render() {
    return (
      <View>
        <TodoList />
      </View>
    );
  }

}
