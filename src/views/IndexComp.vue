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
                    <h2 class="card_subtitle">&#8594; {{ card.title }}</h2>
                </router-link>
                <img :src="card.img" :alt="card.title"  class="card_img" />
            </div>
        </div> 
    <h3 class="about-text">Таблица приблизительных расчетов</h3>  
    <span class="service_group_text">Остались вопросы? Звоните: </span>
      <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill ='#000000' d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
      </svg>
        <a href="tel:+79601039766" title="Позвонить на 8 960 103 97 66" class="map__info_text" style="color: black;">8 960 103 97 66</a>

        <table id="tablepress-1" class="table tablepress-id-1">
<thead>
<tr class="row">
	<th class="column about-text">Услуга</th><th class="column about-text">Цена</th>
</tr>
</thead>
<tbody>
<tr class="row">
	<td class="column">Расточка блока цилиндров (ВАЗ 2101-2112)</td><td class="column">3000</td>
</tr>
<tr class="row">
	<td class="column">Расточка блока цилиндров (ГАЗ-402,405,406,409)</td><td class="column">3500</td>
</tr>
<tr class="row">
	<td class="column">Расточка блока цилиндров иномарки (за цилиндр)</td><td class="column">1000</td>
</tr>
<tr class="row">
	<td class="column">Гильзовка блока цилиндров ВАЗ (с расточкой)</td><td class="column">6000</td>
</tr>
<tr class="row">
	<td class="column">Гильзовка блока цилиндров ГАЗ 405,406,409 (с расточкой)</td><td class="column">7000</td>
</tr>
<tr class="row">
	<td class="column">Гильзовка блока цилиндров  иномарки (с расточкой)</td><td class="column">От 8000</td>
</tr>
<tr class="row">
	<td class="column">Фрезеровка головки блока цилиндров</td><td class="column">От 1000</td>
</tr>
<tr class="row">
	<td class="column">Шлифовка коленвала (ВАЗ 2101-2112)</td><td class="column">2500</td>
</tr>
<tr class="row">
	<td class="column">Шлифовка коленвала (ГАЗ-402,405,406,409)</td><td class="column">3500</td>
</tr>
<tr class="row">
	<td class="column">Шлифовка коленвала иномарки</td><td class="column">от 3500</td>
</tr>
<tr class="row">
	<td class="column">Балансировка коленвала ГАЗ-402,421 (с очисткой)</td><td class="column">от 2000</td>
</tr>
<tr class="row">
	<td class="column">Балансировка коленвала ГАЗ-53</td><td class="column">3000</td>
</tr>
<tr class="row">
	<td class="column">Балансировка коленвала МТЗ</td><td class="column">4000</td>
</tr>
<tr class="row">
	<td class="column">Ремонт шатуна ГАЗ-402,405,406,409,421 (замена втулки)</td><td class="column">от 750 за шатун</td>
</tr>

</tbody>
</table>
        <p class="about-text">При выполнении широкого спектра услуг, в том числе и выездных, мы руководствуемся:</p> 
            <ul class="list">
                <li>Индивидуальным подходом</li>
                <li>Вниманием к деталям</li>
                <li>Уверенностью в исполнении эксклюзивных токарных работ</li>
            </ul>
        
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
                    img: require("@/assets/images/workWithBlock.jpeg")
                },
                {                
                    path: {path: '/services', hash:'#card2'},
                    title: 'Работы с колен. валом',
                    img: require("@/assets/images/workCrank.jpg")
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



