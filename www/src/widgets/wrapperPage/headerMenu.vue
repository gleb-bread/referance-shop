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
    </v-app-bar>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu/index';
    
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