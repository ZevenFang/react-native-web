import React from 'react';
import { List, InputItem, Icon, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { firstError } from '../utils/rcform';

@connect(({ todo }) => ({ todo }))
class TodoList extends React.Component {

  onSave = () => {
    const { form, dispatch } = this.props;
    form.validateFields({ first: false }, async (error, value) => {
      if (error) Toast.fail(firstError(error), 1);
      else {
        await dispatch({
          type: 'todo/add',
          text: value.task,
        });
        form.resetFields(['task']);
      }
    });
  };

  render() {
    const { todo, form } = this.props;
    const { getFieldProps } = form;
    return (
      <List renderHeader={() => 'Todos List'}>
        <InputItem
          {...getFieldProps('task', {
            rules: [{ required: true }],
          })}
          placeholder="New Task"
          extra={<Icon type={'check'} />}
          onExtraClick={this.onSave}
          onKeyPress={e => e.key === 'Enter' && this.onSave()}
          onSubmitEditing={this.onSave}
          labelNumber={3}
        >Todo</InputItem>
        {todo.data.map((v, k) => (
          <TodoItem key={k} id={k} todo={v} />
        ))}
      </List>
    );
  }

}

export default createForm()(TodoList);
