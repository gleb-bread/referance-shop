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
            @click.stop="getCurrectLinkSubcategory(subcategory)"
            :active="subcategory == getCurrectSubcategory()"
            link>
            {{ subcategory ? subcategory : 'Другое' }}
        </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import { toHandlers } from 'vue';
import { resolveTransitionHooks } from 'vue';
    
export default defineComponent({
    
    computed: {
        getShowSubcategories: {
            get(): boolean{
                return this.menuStore.getMenuSubcategoriesShow;
            },

            set(flag: boolean){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, flag);
            }
        },

        getSubcategoriesList(): string[]{
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
            parserProductsStore: useParserProductsStore(),
        };
    },
    
    methods: {
        getCurrectLinkSubcategory(subcategory: string){
            let getParam = window.location.href.split('?')[1];

            let currectGetParam = new URLSearchParams(getParam);

            if(currectGetParam.get('category')){
                this.parserProductsStore.setParserProducts(this.parserProductsStore,
                {
                    page: 1,
                    category: decodeURI(<string> currectGetParam.get('category')),
                    subcategory: subcategory,
                });

                currectGetParam.delete('subcategory');
                currectGetParam.append('subcategory', encodeURI(subcategory));

                this.$router.replace(this.$route.path + '?' + currectGetParam.toString());
            } else {
                this.$router.replace('/');
            }
        },

        getCurrectSubcategory(){
            let getParam = window.location.href.split('?')[1];

            let currectGetParam = new URLSearchParams(getParam);

            if(currectGetParam.get('subcategory')){
                return decodeURI(currectGetParam.get('subcategory') === 'null' ? "" : <string> currectGetParam.get('subcategory'));
            } else {
                return false;
            }
        }
    },
    
    components: {
        
    },

    async created(){
        
    }
});
</script>
    
<style scoped lang='scss'>
</style>