const app = {
  namespaced: true,
  state: () => ({
    isExpand: true
  }),
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.isExpand = !state.isExpand
    }
  },
  actions: {
    toggleSidebar: ({ commit }, isExpand) => {
      commit('TOGGLE_SIDEBAR', isExpand)
    }
  }
}
export default app
