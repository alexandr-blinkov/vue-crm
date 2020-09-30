import Vue from 'vue'
import Vuex from 'vuex'
import info from './info'
import auth from './auth'
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,GBP,RUB`)
      return await res.json()
    }
  },
  getters: {
    error: state => state.error
  },
  modules: {
    auth,
    info,
    category,
    record
  }
})
