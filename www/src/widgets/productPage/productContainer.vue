<template>
    <v-container
        v-if="getProductInfo">
        <product-title
            :product-title="getProductInfo?.title">
        </product-title>
        <main-container-info-product
            :product-item="getProductInfo">
        </main-container-info-product>
    </v-container>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import productTitle from './productComponents/productTitle.vue';
import mainContainerInfoProduct from './productComponents/mainContainerInfoProduct.vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    emits: {
        
    },
    
    computed: {
        getProductInfo(){
            let product = this.parserProductsStore.getParserProducts?.find(item => item.id === <number> Number(this.$route.params.id));

            if(product){
                return product;
            } else {
                this.parserProductsStore.setParsertProductsById(this.parserProductsStore, Number(this.$route.params.id));
                return null;
            }
        }
    },
    
    data() {
        return {
            parserProductsStore: useParserProductsStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        productTitle,
        mainContainerInfoProduct
    },
});
</script>
    
<style scoped lang='scss'>
</style>