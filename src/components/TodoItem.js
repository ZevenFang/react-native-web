import React from 'react';
import { Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

export default class TodoItem extends React.Component {

  state = {
    completed: false,
  };

  onComplete = () => {

  };

  render() {
    const { id, todo } = this.props;
    return (
      <CheckboxItem checked={todo.completed} onChange={() => this.onComplete(id)}>
        {todo.text}
      </CheckboxItem>
    );
  }

}
