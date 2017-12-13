import React from 'react';
import { List, InputItem, Icon, Toast, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import TodoText from './TodoText';
import { firstError } from '../utils/rcform';

const CheckboxItem = Checkbox.CheckboxItem;

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

  onComplete = async (id) => {
    await this.props.dispatch({
      type: 'todo/check', id,
    });
  };

  onDelete = async (id) => {
    await this.props.dispatch({
      type: 'todo/del', id,
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
          <CheckboxItem
            key={k} extra={<Icon type={'cross'} />}
            checked={v.completed} wrap
            onChange={() => this.onComplete(k)}
            onExtraClick={() => this.onDelete(k)}
          >
            <TodoText {...v} />
          </CheckboxItem>
        ))}
      </List>
    );
  }

}

export default createForm()(TodoList);
