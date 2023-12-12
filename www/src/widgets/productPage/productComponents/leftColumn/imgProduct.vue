<template>
    <v-col>
        <v-lazy
            height="300">
            <v-img
                width="auto"
                aspect-ratio="16/9"
                :src="productItem?.images?.img1">
            </v-img>
        </v-lazy>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import { PropType } from 'vue';
    
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
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>
