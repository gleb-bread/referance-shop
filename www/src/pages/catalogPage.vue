<template>
    <template v-if="parserProductsStore.getLoading || parserProductsStore.getError">
      <div
        class="w-screen h-screen d-flex justify-center"
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
            :rounded="false"
            title="Ошибка"
            text="Произошла ошибка загрузки">
        </v-alert>
      </div>
  </template>
  <template
    v-else>
    <grid-categories>
    </grid-categories>
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import gridCategories from '@/widgets/catalogPage/gridCategories.vue';
    
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
      gridCategories
    },

    async created(){
      await this.parserProductsStore.setParserCategories(this.parserProductsStore);
      await this.parserProductsStore.setImgOnCategory(this.parserProductsStore);
    }

});
</script>
    
<style scoped lang='scss'>

.w-screen{
  width: 100vw;
}

.h-screen{
  height: calc(100vh - 64px);
}

</style>