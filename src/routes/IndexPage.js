import React from 'react';
import { List, Drawer, NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import styles from './IndexPage.less';

@connect(({ todo }) => ({ todo }))
class IndexPage extends React.Component {

  state = {
    open: false,
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const sidebar = (
      <List>
        <List.Item>Todos</List.Item>
        <List.Item>Counter</List.Item>
      </List>);
    return (
      <div>
        <NavBar className={styles.navbar} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Todos</NavBar>
        <Drawer
          className={styles.drawer}
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sidebar}
          sidebarStyle={{ width: '70%', background: 'rgb(245,245,249)' }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          <TodoList />
        </Drawer>
      </div>
    );
  }

}

export default IndexPage;
