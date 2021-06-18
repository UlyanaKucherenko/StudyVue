import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchGifs() {
      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&limit=1000`);
      return await res.json()
    }
  },
  modules: {
  }
})
