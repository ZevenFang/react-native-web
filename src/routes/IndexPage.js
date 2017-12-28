import React from 'react';
import { List, Drawer, NavBar, Icon } from 'antd-mobile';
import { Route, Link, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'react-redux';
import styles from './IndexPage.less';

@connect()
export default class IndexPage extends React.Component {

  state = {
    open: false,
    title: 'Todos',
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  };

  onNavigate = (path, title) => {
    this.setState({ open: false, title });
    this.props.dispatch(routerRedux.push(path));
  };

  render() {
    const { app } = this.props;
    const routes = [{
      path: '/',
      component: () => import('../components/TodoList'),
    }, {
      path: '/counter',
      component: () => import('../components/Counter'),
    }];
    const sidebar = (
      <List>
        <List.Item onClick={() => this.onNavigate('/', 'Todos')}><Link to="/">Todos</Link></List.Item>
        <List.Item onClick={() => this.onNavigate('/counter', 'Counter')}><Link to="/counter">Counter</Link></List.Item>
      </List>);
    return (
      <div>
        <NavBar className={styles.navbar} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>{this.state.title}</NavBar>
        <Drawer
          className={styles.drawer}
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sidebar}
          sidebarStyle={{ width: '70%', background: 'rgb(245,245,249)', zIndex: 9 }}
          overlayStyle={{ zIndex: 8 }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          {routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key} exact path={path}
              component={dynamic({
                app, ...dynamics,
              })}
            />
          ))}
        </Drawer>
      </div>
    );
  }

}
