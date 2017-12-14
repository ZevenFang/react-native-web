export default {
  namespace: 'todo',
  state: {
    data: [
      { text: 'Hello', completed: false },
      { text: 'World', completed: false },
      { text: 'React', completed: false },
      { text: 'Mobile', completed: false },
    ],
  },
  reducers: {
    add(state, { text }) {
      state.data.unshift({ text, complete: false });
      return { ...state };
    },
    del(state, { id }) {
      state.data.splice(id, 1);
      return { ...state };
    },
    upd(state, { id, text }) {
      state.data[id].text = text;
      return { ...state };
    },
    check(state, { id }) {
      state.data[id].completed = !state.data[id].completed;
      return { ...state };
    },
  },
};
