import React from 'react';

export default class TodoText extends React.Component {

  render() {
    const { text } = this.props;
    return (
      <span>{text}</span>
    );
  }

}
