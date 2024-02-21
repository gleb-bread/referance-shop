<template>
    <primary-app-bar>
        
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
    </primary-app-bar>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu/index';
import { useCartStore } from '@/app/stores/cart';
import { menuLinks } from '@/shared/struct/menu/links';
import desktopTitle from './headMenu/desktopTitle.vue';
    
export default defineComponent({
    computed: {
        getShowMenuNavigation: {
            get(): boolean{
                return this.menuStore.getMenuNavigationShow;
            },
            set(flag: boolean){
                this.menuStore.setMenuNavigationShow(this.menuStore, flag);
            }
        },

        getShowSubcategories: {
            get(): boolean{
                return this.menuStore.getMenuSubcategoriesShow;
            },
            set(flag: boolean){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, flag);
            }
        },

        getCartShow: {
            get(): boolean{
                return this.menuStore.getCartShow;
            },

            set(flag: boolean){
                this.menuStore.setCartShow(this.menuStore, flag);
            }
        },

        getTitle(): string{
            return this.menuStore.getMenuTitle;
        },

        getSubcategoriesShowBtn(): boolean{
            return this.menuStore.getMenuSubcategoriesBtn;
        }
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
            cartStore: useCartStore(),

            menuLinks: menuLinks,
        };
    },
    
    methods: {

    },
    
    components: {
        desktopTitle
    },
});
</script>
    
<style scoped lang='scss'>

.v-btn--menu-links{
    transition-property: all;
    transition-duration: .3s;
}

</style>