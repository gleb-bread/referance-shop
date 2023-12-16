<template>
    <v-table
        height="calc(100vh - 64px - 50px)"
        fixed-header>
        <thead
            class="bg-white">
            <th v-for="title in titlesTable" 
                class="border py-3">
                {{ title }}
            </th>
        </thead>
        <tbody>
            <v-fade-transition group>
                <tr v-for="product in getProductsStore"
                    :key="product.cart_id">
                    <td class="border">{{ Helper.getDashIfValNotExist(product.title) }}</td>
                    <td class="border text-right">{{ Helper.convertMoneyTypeWithoutRuble(String(product.count_cart)) }}</td>
                    <td class="border text-right">{{ Helper.convertMoneyType(String(product.price)) }}</td>
                    <td class="border text-right">{{ Helper.convertMoneyType(String(product.count_cart * Helper.getZeroIfNumNotExist(product.price))) }}</td>
                </tr>
            </v-fade-transition>
        </tbody>
    </v-table>
    <div
        class="d-flex justify-end pt-2 px-5">
        <v-btn 
            class="mr-2"
            color="error">
            Очистить корзину
        </v-btn>
        <v-btn 
            color="success">
            Оформить заказ
        </v-btn>
    </div>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useCartStore } from '@/app/stores/cart';
import * as Helper from '@/shared/helpers/helper';
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getProductsStore(){
            return this.cartStore.getProducts;
        }
    },
    
    data() {
        return {
            titlesTable: [
                'Наименование',
                'Кол-во',
                'Цена за шт.',
                'Итого'
            ],

            cartStore: useCartStore(),

            Helper: Helper,
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
.bg-white{
    background-color: #FFF;
}
</style>