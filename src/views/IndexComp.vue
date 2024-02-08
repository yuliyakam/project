<template>
 <HeaderComp />

 <main class="content">
    <SliderComp />
        <h1 class="title">Расточка блоков, шлифовка коленчатых валов, фрезеровка головок, токарные работы</h1>
        <h2 class="subtitle">Добро пожаловать к нам в гараж!</h2>
        <p class="about-text">Качество, надежность и многолетний опыт являются нашими неоспоримыми преимуществами и позволяют оказывать уникальные многообразные услуги и в условные сроки</p>
        <div class="card">
            <div class="card_item" v-for="(card, index) in cards" :key="index">
                <router-link
                    :to="getLinkUrl(card.path)" @click="scrollToBlock(card.path)"
                    class="card_subtitle-link" title="Узнать подробнее об услуге">
                    <h2 class="card_subtitle">&#8594 {{ card.title }}</h2>
                </router-link>
                <img :src="card.img" alt="" class="card_img" />
            </div>
        </div> 
        <p class="about-text">При выполнении широкого спектра услуг, в том числе и выездных, мы руководствуемся:
            <ul>
                <li>Индивидуальным подходом</li>
                <li>Вниманием к деталям</li>
                <li>Уверенностью в исполнении эксклюзивных токарных работ</li>
            </ul>
        </p> 
       <MapComp />
       <h2 class="subtitle shadow">Нужна дополнительная информация?</h2>
       <p class="about-text shadow">Заполните форму ниже и мы Вам перезвоним</p>
       <FormComp />
    </main>
<FuterComp />
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import SliderComp from'@/components/SliderComp.vue';
import FuterComp from '@/components/FuterComp.vue';
import MapComp from '@/components/MapComp.vue';
import FormComp from '@/components/FormComp.vue';

export default {
  name: 'Index',
  data() {
    return {
        cards: [
                {                    
                    path: {path: '/services', hash:'#card1'},
                    title: 'Работы с блоком цилиндров',
                    img: require("@/assets/images/engin.jpg")
                },
                {                
                    path: {path: '/services', hash:'#card2'},
                    title: 'Работы с колен. валом',
                    img: require("@/assets/images/crankshaft.jpg")
                },
                {                    
                    path: {path: '/services', hash:'#card3'},
                    title: 'Токарные работы',
                    img: require("@/assets/images/turning-works.jpg")
                },
            ]
    }
  },
  methods: {
    scrollToBlock(url) {
            this.$router.push(url);
            setTimeout(() => {
                const block = document.querySelector(url.hash);
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
  components: {
    HeaderComp,
    FuterComp,
    SliderComp,
    MapComp,
    FormComp
},

}
</script>



