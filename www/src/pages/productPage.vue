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
  <template v-else>
    <v-card
        height="calc(100vh - 64px)"
        class="overflow-auto"
        rounded="none">
        <v-card-text>
            <product-container>
            </product-container>
        </v-card-text>
    </v-card>
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import productContainer from '@/widgets/productPage/productContainer.vue';
    
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
        productContainer
    },
});
</script>
    
<style scoped lang='scss'>

</style>