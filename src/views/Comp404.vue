<template>
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <HeaderComp />
  <div class="page404 center">
    <h2 class="page404__title">404</h2>
    <p class="page404__text">
      Извините, но страница, которую вы запрашиваете, не найдена
    </p>
    <router-link class="page404__btn" :to="'/'"
      >&#8592; На Главную
    </router-link>
  </div>
  <FuterComp />
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FuterComp from "@/components/FuterComp.vue";
export default {
  name: "Comp404",
  components: {
    HeaderComp,
    FuterComp,
  },
};
</script>
