<template>
  <v-app>
    <header-menu
      v-model:show-menu-navigation="showMenuNavigation">
    </header-menu>
    <v-main>
      <menu-navigation
        v-model:show-navigation="showMenuNavigation">
      </menu-navigation>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerMenu from '@/widgets/wrapperPage/headerMenu.vue';
import menuNavigation from './widgets/wrapperPage/menuNavigation.vue';

export default defineComponent({
  name: 'App',

  data () {
    return {
      showMenuNavigation: false,
    }
  },

  components: {
    headerMenu,
    menuNavigation
  }

})
</script>
