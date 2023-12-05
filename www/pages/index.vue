<template>
  <template v-if="parsingProducts.getLoading || parsingProducts.getError">
    <div
      class="h-screen w-screen d-flex justify-center"
      :class="{ 'align-center': !parsingProducts.getError }">
      <v-progress-circular
          v-if="parsingProducts.getLoading && !parsingProducts.getError"
          indeterminate
          :size="58"
          :width="8"
          color="primary">
        </v-progress-circular>
        <v-alert
          v-if="parsingProducts.getError"
          max-height="100px"
          type="error"
          rounded="0"
          title="Ошибка"
          text="Произошла ошибка загрузки">
        </v-alert>
      </div>
  </template>
  <index-components-shop-container>
  </index-components-shop-container>
</template>

<script lang='ts'>
  
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useMenuStore } from '~/stores/menu';
  
export default defineComponent({
  props: {
    
  },
  
  emits: {
    
  },
  
  computed: {
    
  },
  
  data() {
    return {
      currectTab: '',
      menuStore: useMenuStore(),
      parsingProducts: useParserProductsStore(),
    };
  },
  
  methods: {
    
  },
  
  components: {

  },

  async created(){
    await this.parsingProducts.setParserProducts(this.parsingProducts);
  },

  mounted(){
    this.menuStore.setMenuTitle(this.menuStore, 'Главная страница');
  }

});
</script>

<script setup lang="ts">
useHead({
  title: 'Главная страница',
})
</script>
  
<style scoped lang='scss'>
.h-100-vh {
  height: 100vh;
}

.w-100-vw{
  width: 100vw;
}
</style>