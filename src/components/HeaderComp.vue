<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <title></title>
  </head>
  <header>
    <nav class="nav center">
      <router-link class="link-nav" :to="'/'"
        >
        <div class="logo-box"><img src="@/assets/images/l.png" alt="label" class="logo"
      /></div>
    </router-link>

      <div class="right-header-part">
        <a href="tel:+79601039766" class="nav-link" title="Позвонить на 8 960 103 97 66">
        <div class="telNum">
          
            <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill ='#000000' d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>89601039766
        
          
        </div>
      </a>
        <label for="header__check"
          ><svg
            class="one-element img-nav"
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
              fill="#000"
            />
          </svg>
        </label>
        <router-link v-for="item in linkArr" :key="item.id" :to="item.url" class="nav-link">{{ item.name }}</router-link>
        

        <input class="header__checkbox" id="header__check" type="checkbox" />

        <div class="drop-down-menu">
          <ul class="menu">
            <li> <router-link :to="'/'" class="drop-menu-link">Главная</router-link>
              </li>
            <li>
              <router-link :to="'/services'" class="drop-menu-link">Услуги</router-link>
              
              <ul class="sub-menu">
                <li v-for="(link, index) in links" :key="index">
                  <router-link :to="getLinkUrl(link.path)" @click="scrollToBlock(link.path)" class="sub-menu-link">
                  {{ link.title }}
                  </router-link>                  
                </li>               
              </ul>
            </li>
            <li>
              <router-link :to="'/contacts'" class="drop-menu-link">Контакты</router-link>
              </li>
          </ul>
        </div>
      </div>
      
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Index",
  computed: {
          ...mapState(['linkArr']),
        },
  data() {
    return {
      links: [
        {
          path: {path: '/services', hash:'#card1'},
                    title: 'Работы с блоком',
        },
        {
          path: {path: '/services', hash:'#card2'},
                    title: 'Работы с колен. валом',
        },
      {
        path: {path: '/services', hash:'#card3'},
                    title: 'Токарные работы',
      }

      ]
    }
  },
  methods: {
    scrollToBlock(url) {
            this.$router.push(url);                          
            setTimeout(() => {
              
                const block = document.querySelector(url.hash);
                console.log(block);
                console.log(url.hash);

                if (block) {
                    block.scrollIntoView( {behavior: 'smooth'} );
            }}, 500);
           
        },
        getLinkUrl(link) {
            if (typeof link === 'string') {
                return link;
            } else if (typeof link === 'object') {
                return link.path;
            }
        }
  },
  props: {},
};
</script>
