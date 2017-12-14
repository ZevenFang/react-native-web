import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import Header from '../components/Header';

@connect(({ todo }) => ({ todo }))
class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Header title={'Todos'} />
        <TodoList />
      </div>
    );
  }

}

export default IndexPage;
