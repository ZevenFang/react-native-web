import React from 'react';
import { List, Stepper, Toast } from 'antd-mobile';
import { connect } from 'react-redux';

@connect(({ counter }) => ({ counter }))
export default class Counter extends React.Component {

  onChange = (number) => {
    this.props.dispatch({
      type: 'counter/change',
      number,
    });
  };

  onDelayChange = async (number) => {
    Toast.loading('Loading...');
    await this.props.dispatch({
      type: 'counter/delayChange',
      number,
    });
    Toast.hide();
  };

  render() {
    const { counter } = this.props;
    const stepperStyle = { width: '100%', minWidth: '100px' };
    return (
      <List renderHeader={() => 'Counter List'}>
        <List.Item
          wrap
          extra={
            <Stepper
              style={stepperStyle}
              showNumber value={counter.number}
              onChange={this.onChange}
            />}
        >
          Counter
        </List.Item>
        <List.Item
          extra={
            <Stepper
              style={stepperStyle}
              showNumber value={counter.delay}
              onChange={this.onDelayChange}
            />}
        >
          Delay
        </List.Item>
      </List>
    );
  }

}
