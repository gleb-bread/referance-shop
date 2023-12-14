<template>
    <v-navigation-drawer
        v-model="getCartShow"
        location="right"
        color="secondary">
        <v-list-item title="Корзина"></v-list-item>
        <v-divider></v-divider>
        <template
            v-if="getCartProducts.length"
            v-for="product in getCartProducts">
            <v-list-item 
                link>
                {{ product.brand }}
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
        
    },

    async created(){
        await this.cartStore.setProducts(this.cartStore, {page: 1});
    }

});
</script>
    
<style scoped lang='scss'>
</style>