function delay(t) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, t);
  });
}

export default {
  namespace: 'counter',
  state: {
    number: 1,
    delay: 1,
  },
  reducers: {
    change(state, { number }) {
      state.number = number;
      return { ...state };
    },
    delaySync(state, { number }) {
      state.delay = number;
      return { ...state };
    },
  },
  effects: {
    *delayChange({ number }, { put, call }) {
      yield call(delay, 500);
      yield put({ type: 'delaySync', number });
    },
  },
};
