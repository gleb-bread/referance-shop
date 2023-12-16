<template>
    <div>
        <v-btn 
            class="mb-2"
            color="success">
            Перейти к оформлению
        </v-btn>
        <v-btn
            @click.stop="handlerDropCart"
            class="w-100"
            color="error">
            Очистить корзину
        </v-btn>
    </div>
</template>

<script lang='ts'>
    
import { defineComponent, toHandlers } from 'vue';
import { PropType } from 'vue';
import { useCartStore } from '@/app/stores/cart';
import { useRequestHandler } from '@/app/stores/requestHandler';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            cartStore: useCartStore(),
            requestHandler: useRequestHandler(),
        };
    },
    
    methods: {
        async handlerDropCart(){
            let result = await this.cartStore.dropCart(this.cartStore);

            if(result){

            } else {
                this.requestHandler.setAnswerRequest(this.requestHandler, false);
                this.requestHandler.setTextRequest(this.requestHandler, 'Не удалось очистить корзину');
            }
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>