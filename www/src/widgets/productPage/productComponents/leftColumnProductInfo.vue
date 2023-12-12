<template>
    <v-col
        class="max-w-900">
        <v-row>
            <img-product
                :product-item="productItem">
            </img-product>
        </v-row>
        <v-row>
            <btns-product>
            </btns-product>
        </v-row>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import imgProduct from './leftColumn/imgProduct.vue';
import btnsProduct from './leftColumn/btnsProduct.vue';
    
export default defineComponent({
    props: {
        productItem: {
            type: Object as PropType<ParserProductsType>,
            required: true,
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            
        };
    },
    
    methods: {
        
    },
    
    components: {
        imgProduct,
        btnsProduct
    },
});
</script>
    
<style scoped lang='scss'>
.max-w-900{
    max-width: 900px;
}
</style>