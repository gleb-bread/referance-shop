<template>
    <span v-for="item in getParsingProducts">{{ item }}</span>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import { useMenuStore } from '@/app/stores/menu';
import { ParserProductsType } from '@/app/stores/types';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getParsingProducts(): ParserProductsType[]{
            return this.parserProducts.getParserProducts;
        }
    },
    
    data() {
        return {
            parserProducts: useParserProductsStore(),
            menuStore: useMenuStore(),

        };
    },
    
    methods: {
        async handlerCreatedElement(){
            let currectCategory = this.getCurrectCategoryFromURL();
            if(this.parserProducts.getParserCategories[<string> currectCategory]?.length){
                this.menuStore.setMenuSubcategoriesBtn(this.menuStore, true);
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, true);
                this.menuStore.setSubcategoriesList(this.menuStore, this.parserProducts.getParserCategories[<string> currectCategory]);
                this.parserProducts.setParserProducts(this.parserProducts, {page: 1, category: currectCategory});
            } else {
                this.parserProducts.setParserCategories(this.parserProducts);
                this.menuStore.setMenuSubcategoriesBtn(this.menuStore, true);
                this.parserProducts.setImgOnCategory(this.parserProducts);
                this.parserProducts.setParserProducts(this.parserProducts, {page: 1, category: currectCategory});
            }
        },

        getCurrectCategoryFromURL(){
            let params = new URLSearchParams(String(window.location.href.split('?')[1]));
            if(params.get('category')){
                return decodeURI(<string> params.get('category'));
            } else {
                this.$router.replace('/');
            }
        }
    },
    
    components: {
        
    },

    async created(){
       await this.handlerCreatedElement();
    }
});
</script>
    
<style scoped lang='scss'>
</style>