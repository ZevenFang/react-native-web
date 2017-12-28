import React from 'react';
import { List, InputItem, Icon, Toast, Checkbox, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import Touch from './Touch';
import Text from './Text';
import { firstError } from '../utils/rcform';

const CheckboxItem = Checkbox.CheckboxItem;

@connect(({ todo }) => ({ todo }))
class TodoList extends React.Component {

  componentDidMount() {
    if (window.platform) { // 只在 ReactNative 中使用
      this.props.screenProps.stackNavigation.setParams({
        title: 'Todos', drawerNavigation: this.props.navigation,
      });
    }
  }

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

  onDelete = (id) => {
    Modal.alert('Delete', 'Are you sure?', [
      { text: 'Cancel' },
      { text: 'OK',
        onPress: () => {
          this.props.dispatch({
            type: 'todo/del', id,
          });
          Toast.success('Deleted!', 1);
        } },
    ]);
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
            key={k} extra={<Touch onClick={() => this.onDelete(k)} onPress={() => this.onDelete(k)}><Icon type={'cross'} /></Touch>}
            checked={v.completed === true} wrap
            onChange={() => this.onComplete(k)}
          >
            <Text style={v.completed ? { textDecorationLine: 'line-through', color: '#aaa' } : {}}>{v.text}</Text>
          </CheckboxItem>
        ))}
      </List>
    );
  }

}

export default createForm()(TodoList);
