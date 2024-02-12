
<template>
   <HeaderComp />
   <main class="content">
    <div class="contact-info">
      <div class="contact-info__left">
      <h3 class="footer__heading footer__logo">Контакты</h3>
        <p class="footer__text mb">
        г.Краснодар СНТ Авиатор 15км Ростовского шоссе Вишневая 74 </p>
        <a href="mailto:yulyakam85@mail.ru" class="footer__link" title="Написать на email">yulyakam85@mail.ru</a>
        <a href="tel:+79601039766" title="Позвонить на 8 960 103 97 66" class="footer__link">8 960 103 97 66</a>
      </div>
      <div class="slogan">
        <h3 class="slogan__heading"> Качество и&nbsp;надежность от&nbsp;искусных мастеров в&nbsp;каждой уникальной детали</h3>
      </div>
    </div>
   
      <FormComp />
 
    <MapComp />
    </main>
    <FuterComp />
</template>

<script>
import FormComp from '@/components/FormComp.vue';

import FuterComp from '@/components/FuterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

import MapComp from '@/components/MapComp.vue';

export default {
  name: 'Contact',
  props: {
    
  },
  components: {
    HeaderComp,
    FuterComp,      
    FormComp,
    MapComp
}

}

</script>