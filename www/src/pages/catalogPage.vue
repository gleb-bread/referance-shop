<template>
    <template v-if="parserProductsStore.getLoading || parserProductsStore.getError">
    <div
      class="h-screen w-screen d-flex justify-center"
      :class="{ 'align-center': !parserProductsStore.getError }">
      <v-progress-circular
          v-if="parserProductsStore.getLoading && !parserProductsStore.getError"
          indeterminate
          :size="58"
          :width="8"
          color="primary">
        </v-progress-circular>
        <v-alert
          v-if="parserProductsStore.getError"
          max-height="100px"
          type="error"
          rounded="0"
          title="Ошибка"
          text="Произошла ошибка загрузки">
        </v-alert>
      </div>
  </template>
  <template
    v-else>
    <index-components-categories>
    </index-components-categories>
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import wrapperPage from './wrapperPage.vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            parserProductsStore: useParserProductsStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        wrapperPage,
    },

    async created(){
        await this.parserProductsStore.setParserCategories(this.parserProductsStore);
    }

});
</script>
    
<style scoped lang='scss'>
</style>