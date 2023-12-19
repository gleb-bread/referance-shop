<template>
  <v-app>
    <header-menu>
    </header-menu>
    <menu-navigation>
    </menu-navigation>
    <subcategory-navigation>
    </subcategory-navigation>
    <cart-navigation>
    </cart-navigation>
    <v-main
      class="pos-rel">
      <router-view/>
      <modal-list
        :text-answer="requestHandler.getTextRequest"
        :response-request="requestHandler.getAnswerRequest"
        @restore-request="handlerClearAnswer">
      </modal-list>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerMenu from '@/widgets/wrapperPage/headerMenu.vue';
import menuNavigation from './widgets/wrapperPage/menuNavigation.vue';
import subcategoryNavigation from './widgets/wrapperPage/subcategoryNavigation.vue';
import cartNavigation from './widgets/wrapperPage/cartNavigation.vue';
import modalList from './widgets/wrapperPage/modalList.vue';
import { useRequestHandler } from './app/stores/requestHandler';

export default defineComponent({
  name: 'App',

  metaInfo: {

  }, 

  data () {
    return {
      showMenuNavigation: false,
      requestHandler: useRequestHandler(),
    }
  },

  methods: {
    handlerClearAnswer(){
      this.requestHandler.setAnswerRequest(this.requestHandler, null);
      this.requestHandler.setTextRequest(this.requestHandler, '');
    }
  },

  components: {
    headerMenu,
    menuNavigation,
    subcategoryNavigation,
    cartNavigation,
    modalList
  }

})
</script>

<style scoped lang="scss">
.pos-rel{
  position:relative;
}
</style>
