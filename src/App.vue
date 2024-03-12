<template> 
  <router-view/>
</template>

<script>
import IndexComp from './views/IndexComp.vue';
import ServicesComp from './views/ServicesComp.vue';
import ContactComp from './views/ContactComp.vue';
import Comp404 from './views/Comp404.vue';
import PrivacyPolicyComp from './views/PrivacyPolicyComp.vue';



export default {
  components: {
    IndexComp,
    ServicesComp,
    ContactComp,
    Comp404, 
    PrivacyPolicyComp
  }
}
</script>
