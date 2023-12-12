<template>
    <v-row>
        <left-column-product-info
            :product-item="productItem">
        </left-column-product-info>
        <right-column
            :product-item="productItem">
        </right-column>
    </v-row>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import leftColumnProductInfo from './leftColumnProductInfo.vue';
import rightColumn from './rightColumn.vue';
    
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
        leftColumnProductInfo,
        rightColumn
    },
});
</script>
    
<style scoped lang='scss'>
</style>
