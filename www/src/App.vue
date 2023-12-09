<template>
  <v-app>
    <header-menu>
    </header-menu>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerMenu from '@/widgets/wrapperPage/headerMenu.vue';

export default defineComponent({
  name: 'App',

  data () {
    return {
      
    }
  },

  components: {
    headerMenu,
  }

})
</script>
