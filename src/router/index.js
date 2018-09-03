import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from "../components/HomePage";
// import MusicPage from "../components/MusicPage";
// import SearchPage from "../components/SearchPage";
// import SingerPage from "../components/SingerPage";
// import PlaylistPage from "../components/PlaylistPage";
// import RankListPage from "../components/RankListPage";
// import RecommendPage from "../components/RecommendPage";
// import Home from "../components/Home";
// import NewMusic from "../components/NewMusic";
// import SongListDetail from "../components/SongListDetail";
// import SingerSongList from "../components/SingerSongList";
// import SearchResult from "../components/SearchResult";
// import Audio from "../components/Audio";
Vue.use(Router)

const HomePage = () =>
  import("../components/HomePage");
const MusicPage = () =>
  import("../components/MusicPage");
const SearchPage = () =>
  import("../components/SearchPage");
const SingerPage = () =>
  import("../components/SingerPage");
const PlaylistPage = () =>
  import("../components/PlaylistPage");
const RankListPage = () =>
  import("../components/RankListPage");
const RecommendPage = () =>
  import("../components/RecommendPage");
const Home = () =>
  import("../components/Home");
const NewMusic = () =>
  import("../components/NewMusic");
const SongListDetail = () =>
  import("../components/SongListDetail");
const SingerSongList = () =>
  import("../components/SingerSongList");
const SearchResult = () =>
  import("../components/SearchResult");
const Audio = () =>
  import("../components/Audio");

export default new Router({
  linkActiveClass: 'router-link-active',
  routes: [{
      path: '/',
      redirect: 'main'
    },
    {
      path: '/newMusic',
      name: 'NewMusic',
      meta: {
        index: 5
      },
      component: NewMusic,
    },
    {
      path: '/listDetail',
      name: 'SongListDetail',
      meta: {
        index: 6
      },
      component: SongListDetail
    },
    {
      path: '/search',
      name: 'SearchPage',
      meta: {
        index: 4
      },
      component: SearchPage
    },
    {
      path: '/searchResult',
      name: 'SearchResult',
      meta: {
        index: 5
      },
      component: SearchResult
    },
    {
      path: '/music',
      name: 'MusicPage',
      meta: {
        index: -1
      },
      component: MusicPage
    },
    {
      path: '/audio',
      name: 'Audio',
      meta: {
        index: 7
      },
      component: Audio
    },
    {
      path: '/singerList',
      name: 'SingerSongList',
      meta: {
        index: 6
      },
      component: SingerSongList
    },
    {
      path: '/main',
      name: 'Home',
      component: Home,
      children: [{
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'HomePage',
          meta: {
            index: 2
          },
          component: HomePage,
          children: [{
              path: '',
              redirect: 'recommend'
            },
            {
              path: 'recommend',
              component: RecommendPage,
              meta: {
                index: 0
              }
            },
            {
              path: 'playlist',
              component: PlaylistPage,
              meta: {
                index: 1
              }
            },
            {
              path: 'rank',
              component: RankListPage,
              meta: {
                index: 3
              }
            },
          ]
        },
        {
          path: 'singer',
          name: 'SingerPage',
          meta: {
            index: 3
          },
          component: SingerPage
        }
      ]
    },

  ]
})
