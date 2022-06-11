import Vuex from "vuex";
import axios from "axios";

export default new Vuex.Store({
  state: {
    songList: [],
    currentSong: null,
  },
  mutations: {
    SET_SONGS(state, payload) {
      state.songList = payload;
    },
    CHANGE_CURRENT_SONG(state, payload) {
      state.currentSong = payload;
    },
  },
  actions: {
    fetchSongs({ commit }) {
      axios({
        method: "get",
        url: "https://orangevalleycaa.org/api/music",
        params: {
          order: "name",
        },
      })
        .then((response) => commit("SET_SONGS", response.data))
        .catch((error) => console.log(error));
    },
    changeSong({ commit }, payload) {
      commit("CHANGE_CURRENT_SONG", payload);
    },
    deleteSong({ commit }, payload) {
      const newList = this.state.songList.filter((song) => song !== payload);
      commit("SET_SONGS", newList);
    },
  },
});
