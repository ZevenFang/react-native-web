import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

@connect(({ todo }) => ({ todo }))
class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }

}

export default IndexPage;
