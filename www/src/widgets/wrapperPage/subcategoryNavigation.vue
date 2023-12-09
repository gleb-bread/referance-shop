<template>
    <v-navigation-drawer
        location="right"
        v-model:model-value="getShowSubcategories"
        color="secondary">
        <v-list-item>
            <span class="text-subtitle-1 font-weight-bold">Подкатегории</span>
        </v-list-item>
        <v-divider></v-divider>
        <template
            v-for="subcategory in getSubcategoriesList">
            <v-list-item 
            link>
            {{ subcategory }}
        </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
import { toHandlers } from 'vue';
    
export default defineComponent({
    
    computed: {
        getShowSubcategories: {
            get(){
                return this.menuStore.getMenuSubcategoriesShow;
            },

            set(flag: boolean){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, flag);
            }
        },

        getSubcategoriesList(){
            return this.menuStore.getSubcategoriesList;
        }
    },
    
    data() {
        return {
            navigations: [
                {
                    prependIcon: 'mdi-home',
                    text: 'Главная',
                    link: '/'
                }
            ],

            menuStore: useMenuStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    async created(){
        
    }
});
</script>
    
<style scoped lang='scss'>
</style>