<template>
  <v-app>
    <header-menu>
    </header-menu>
    <menu-navigation>
    </menu-navigation>
    <subcategory-navigation>
    </subcategory-navigation>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerMenu from '@/widgets/wrapperPage/headerMenu.vue';
import menuNavigation from './widgets/wrapperPage/menuNavigation.vue';
import subcategoryNavigation from './widgets/wrapperPage/subcategoryNavigation.vue';

export default defineComponent({
  name: 'App',

  data () {
    return {
      showMenuNavigation: false,
    }
  },

  components: {
    headerMenu,
    menuNavigation,
    subcategoryNavigation
  }

})
</script>
