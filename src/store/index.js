import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    login (state, data) {
      state.data = data
    },
    logout (state) {
      state.data = {}
    }
  },
  // 数据持久化
  plugins: [createPersistedState({
    storage: {
      getItem: key => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: key => localStorage.removeItem(key)
    }
  })]
})
export default store
