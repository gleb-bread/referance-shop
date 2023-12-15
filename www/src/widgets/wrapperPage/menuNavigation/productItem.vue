<template>
    <v-card>
        <v-card-title primary-title>
            <h6 class="text-subtitle-2 ws-initial">{{ productItem.title }}</h6>
        </v-card-title>
        <v-card-text>
            <v-row>
                <header-item
                    :count-cart="productItem.count_cart"
                    :product-images="productItem.images"
                    :product-price="productItem.price">
                </header-item>
            </v-row>
            <v-row>
                <btns-item
                    :count-items="productItem.count_cart"
                    :id-cart="productItem.cart_id">
                </btns-item>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { CartProductItem } from '@/app/stores/types';
import * as Helper from '@/shared/helpers/helper';
import headerItem from './productItem/headerItem.vue';
import btnsItem from './productItem/btnsItem.vue';
    
export default defineComponent({
    props: {
        productItem: {
            type: Object as PropType<CartProductItem>,
            required: true
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            Helper: Helper
        };
    },
    
    methods: {
        
    },
    
    components: {
        headerItem,
        btnsItem
    },
});
</script>
    
<style scoped lang='scss'>
.ws-initial{
    white-space: initial;
}
</style>