<template>
    <v-container class="h-100-vh w-100-vw">
        <index-components-primary-tabs
          @update:tab="currectTab = $event">
        </index-components-primary-tabs>
        <index-components-shop-container
          :currect-tab="currectTab">
        </index-components-shop-container>
    </v-container>
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