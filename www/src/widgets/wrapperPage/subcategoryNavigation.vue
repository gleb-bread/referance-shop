<template>
    <v-navigation-drawer
        location="right"
        v-model:model-value="getShowSubcategories"
        color="secondary">
        <v-list-item title="Подкатегории"></v-list-item>
        <v-divider></v-divider>
        <template
            v-for="navigation in navigations">
            <v-list-item 
            :to="navigation.link"
            :prepend-icon="navigation.prependIcon"
            link>
            {{ navigation.text }}
        </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
    
export default defineComponent({
    
    computed: {
        getShowSubcategories: {
            get(){
                return this.menuStore.getMenuSubcategoriesShow;
            },

            set(flag: boolean){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, flag);
            }
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