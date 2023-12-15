<template>
    <v-navigation-drawer
        v-model="getCartShow"
        location="right"
        color="secondary">
        <v-list-item title="Корзина"></v-list-item>
        <v-divider></v-divider>
        <template v-if="cartStore.getLoading">
            <div class="w-screen h-screen d-flex justify-center align-cente">
                <v-progress-circular
                    indeterminate
                    :size="58"
                    :width="8"
                    class="mt-10"
                    color="info">
                </v-progress-circular>
            </div>
        </template>
        <template v-else-if="cartStore.getError">
            <div class="pt-6 pl-2">Пока здесь ничего нет</div>
        </template>
        <template
            v-else-if="getCartProducts.length"
            v-for="product in getCartProducts">
            <v-list-item>
                <product-item
                    :product-item="product">
                </product-item>
            </v-list-item>
        </template>
        <template v-else>
            <div class="pt-6 pl-2">Пока здесь ничего нет</div>
        </template>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
import { useCartStore } from '@/app/stores/cart';
import productItem from './menuNavigation/productItem.vue';
    
export default defineComponent({
    emits: {
        
    },
    
    computed: {
        getCartShow: {
            get(){
                return this.menuStore.getCartShow;
            },
            set(flag: boolean){
                this.menuStore.setCartShow(this.menuStore, flag);
            }
        },

        getCartProducts: {
            get(){
                return this.cartStore.getProducts;
            },
            set(){

            }
        }
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
            cartStore: useCartStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        productItem
    },

    async created(){
        await this.cartStore.setProducts(this.cartStore, {page: 1});
        await this.cartStore.setCountCart(this.cartStore);
    }

});
</script>
    
<style scoped lang='scss'>
</style>