<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import IndexComp from './views/IndexComp.vue';
import ServicesComp from './views/ServicesComp.vue';
import ContactComp from './views/ContactComp.vue';



export default {
  components: {
    IndexComp,
    ServicesComp,
    ContactComp,
  }
}
</script>
