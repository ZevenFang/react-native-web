// for react native

import React from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';

export { connect };

export default function (options) {
  const app = create(options);
  if (!GLOBAL.registered) options.models.forEach(model => app.model(model));
  GLOBAL.registered = true;
  app.start();
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;

  app.start = container => () => <Provider store={store}>{container}</Provider>;

  app.getStore = () => store;

  return app;
}
