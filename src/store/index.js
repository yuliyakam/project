import { createStore } from 'vuex'

export default createStore({
  state: {
    //Header & Futer nav-menu
    linkArr: [
      {
        id:0,
        name: 'Главная',
        url: '/',
      },
      {
        id:2,
        name: 'Услуги',
        url: '/services',
      },
      {
        id:3,
        name: 'Контакты',
        url: '/contacts',
      },      
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
