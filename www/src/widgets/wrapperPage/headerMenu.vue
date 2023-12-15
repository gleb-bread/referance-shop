<template>
    <v-app-bar
        color="primary"
        :elevation="2">
        <v-app-bar-nav-icon>
            <v-btn
                @click.stop="getShowMenuNavigation = !getShowMenuNavigation"
                icon="mdi-menu">
            </v-btn>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            {{ getTitle }}
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn 
            @click.stop="getShowSubcategories = !getShowSubcategories"
            icon="mdi-format-list-bulleted">
        </v-btn>
        <v-btn 
            @click.stop="getCartShow = !getCartShow">
            <v-fade-transition group>
                <v-badge 
                    v-if="cartStore.getCountCart"
                    :key="1"
                    :content="cartStore.getCountCart" 
                    color="error">
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
                <v-icon 
                    v-else
                    :key="2">
                    mdi-cart
                </v-icon>
            </v-fade-transition>
        </v-btn>
    </v-app-bar>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu/index';
import { useCartStore } from '@/app/stores/cart';
    
export default defineComponent({
    computed: {
        getShowMenuNavigation: {
            get(){
                return this.menuStore.getMenuNavigationShow;
            },
            set(flag: boolean){
                this.menuStore.setMenuNavigationShow(this.menuStore, flag);
            }
        },

        getShowSubcategories: {
            get(){
                return this.menuStore.getMenuSubcategoriesShow;
            },
            set(flag: boolean){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, flag);
            }
        },

        getCartShow: {
            get(){
                return this.menuStore.getCartShow;
            },

            set(flag: boolean){
                this.menuStore.setCartShow(this.menuStore, flag);
            }
        },

        getTitle(){
            return this.menuStore.getMenuTitle;
        },

        getSubcategoriesShowBtn(){
            return this.menuStore.getMenuSubcategoriesBtn;
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
});
</script>
    
<style scoped lang='scss'>
</style>