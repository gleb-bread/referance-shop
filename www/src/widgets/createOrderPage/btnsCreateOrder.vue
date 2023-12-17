<template>
    <clear-cart>
    </clear-cart>
    <create-order>
    </create-order>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import clearCart from './btns/clearCart.vue';
import createOrder from './btns/createOrder.vue';
    
export default defineComponent({
    
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
        clearCart,
        createOrder
    },
});
</script>
    
<style scoped lang='scss'>
</style>