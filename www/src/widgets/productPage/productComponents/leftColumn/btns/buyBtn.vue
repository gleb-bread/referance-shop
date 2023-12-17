<template>
    <v-btn
        @click.stop="handlerAddToCart"
        color="primary"
        :variant="'text'">
            Купить
    </v-btn>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useRequestHandler } from '@/app/stores/requestHandler';
import { CartAddType } from '@/app/stores/types';
import { useCartStore } from '@/app/stores/cart';

export default defineComponent({
    
    props: {
        valueProduct: {
            type: String,
            required: true,
        }
    },

    emits: {
          
    },
    
    computed: {
        
    },
    
    data() {
        return {
            handlerRequest: useRequestHandler(),
            cartStore: useCartStore(),

            idProduct: Number(this.$route.params.id),
        };
    },
    
    methods: {
        async handlerAddToCart(){
            let productToAdd = {
                cart_count: Number(this.valueProduct),
                cart_is_parsing: true,
                cart_product_id: this.idProduct
            } as CartAddType;

            let result = await this.cartStore.addProductToCart(this.cartStore, productToAdd);

            if(result){

            } else {
                this.handlerRequest.setAnswerRequest(this.handlerRequest, false);
                this.handlerRequest.setTextRequest(this.handlerRequest, 'Не удалось добавить товар в корзину');
            }
            
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>