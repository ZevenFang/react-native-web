import React from 'react';
import { NavBar } from 'antd-mobile';

export default class Header extends React.Component {

  render() {
    let { title } = this.props;
    return (
      <NavBar mode="light">{title}</NavBar>
    );
  }

}
