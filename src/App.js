import React, { Component } from 'react';
import dva from './utils/dva';
import models from './models';
import IndexPage from './pages/IndexPage';

const app = dva({ models });

class App extends Component<{}> {
  render() {
    return (
      <IndexPage />
    );
  }
}

export default app.start(<App />);
