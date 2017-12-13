export default {
  namespace: 'todo',
  state: {
    data: [],
  },
  reducers: {
    add(state, { text }) {
      state.data.push({ text, complete: false });
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
