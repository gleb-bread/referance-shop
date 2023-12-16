
import { useCartStore } from '@/app/stores/cart';
<template>
    <v-card
        color="primary"
        :rounded="0">
        <v-card-title primary-title>
            Итого: {{ Helper.convertMoneyType(getTotalSum) }}
        </v-card-title>
        <v-card-text>
            <btns-footer>
            </btns-footer>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useCartStore } from '@/app/stores/cart';
import * as Helper from '@/shared/helpers/helper';
import btnsFooter from './footerNavigation/btnsFooter.vue';

    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getTotalSum(){
            let sum = 0;

            this.cartStore.getProducts.forEach(product => {
                sum += product.count_cart * (product.price ? product.price : 0);
            })

            return String(sum);
        }
    },
    
    data() {
        return {
            cartStore: useCartStore(),

            Helper: Helper
        };
    },
    
    methods: {
        
    },
    
    components: {
        btnsFooter
    },
});
</script>
    
<style scoped lang='scss'>
</style>