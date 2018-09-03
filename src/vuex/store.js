import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentPage: "home",
    currentMusic: {},
    currentMusicList: [],
    playState: false,
    playModel: "list_cycle",
    Audio: false,
    content: {
      height: 0,
      modal: false
    }
  },
  mutations: {
    currentPageChange: (state, page) => {
      state.currentPage = page;
    },
    currentMusicUrlChange: (state, music) => {
      state.currentMusic = music;
    },
    currentMusicListChange: (state, list) => {
      state.currentMusicList = list;
    },
    addCurrentMusicList: (state, item) => {
      state.currentMusicList.push(item);
    },
    deleteCurrentMusicList: (state, id) => {
      state.currentMusicList = state.currentMusicList.filter((item) => {
        return item.id != id;
      })
    },
    playStateChange(state, bool) {
      state.playState = bool
    },
    playModelChange(state) {
      if (state.playModel == "list_cycle") {
        state.playModel = "list_order";
      } else if (state.playModel == "list_order") {
        state.playModel = "list_random";
      } else if (state.playModel == "list_random") {
        state.playModel = "list_one";
      } else {
        state.playModel = "list_cycle";
      }
    },
    changeAudio(state, bool) {
      state.Audio = bool
    },
    changeContentHeight(state, num) {
      state.content.height = num
    },
    changeContentModal(state, bool) {
      state.content.modal = bool
    }
  }
})

export default store
