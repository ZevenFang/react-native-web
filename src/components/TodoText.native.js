import React from 'react';
import { Text } from 'react-native';

export default class TodoText extends React.Component {

  render() {
    const { text } = this.props;
    return (
      <Text>{text}</Text>
    );
  }

}
