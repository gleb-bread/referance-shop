<template>
    <template v-if="parserProducts.getLoading || parserProducts.getError">
      <div
        class="w-screen h-screen d-flex justify-center"
        :class="{ 'align-center': !parserProducts.getError }">
        <v-progress-circular
          v-if="parserProducts.getLoading && !parserProducts.getError"
          indeterminate
          :size="58"
          :width="8"
          color="primary">
        </v-progress-circular>
        <v-alert
            v-if="parserProducts.getError"
            max-height="100px"
            type="error"
            :rounded="false"
            title="Ошибка"
            text="Произошла ошибка загрузки">
        </v-alert>
      </div>
  </template>
  <template v-else>
    <v-virtual-scroll
        v-if="getParsingProducts.length"
        class="pa-10"
        height="calc(100vh - 64px)"
        :items="Helper.chunk<ParserProductsType>(getParsingProducts, currectCell.cells)">
        <template #default="{ item }">
            <v-row>
                <v-col
                    :cols="currectCell.size"
                    v-for="itemProduct in item">
                    <shop-item
                        :product-item="itemProduct">
                    </shop-item>
                </v-col>
            </v-row>
        </template>
    </v-virtual-scroll>
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import { useMenuStore } from '@/app/stores/menu';
import { ParserProductsType } from '@/app/stores/types';
import * as Helper from '@/shared/helpers/helper';
import shopItem from '@/widgets/categoryPage/shopItem.vue';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        currectCell(): {cells: number, size: number}{
            if(this.$vuetify.display.width > 2100){
                return {cells: 6, size: 2};
            } else if(this.$vuetify.display.width > 1800){
                return {cells: 4, size: 3};
            } else if(this.$vuetify.display.width > 1024){
                return {cells: 3, size: 4};
            } else if(this.$vuetify.display.width > 800){
                return {cells: 2, size: 6};
            } else if (this.$vuetify.display.width > 500) {
                return {cells: 1, size: 12};
            }
            return {cells: 1, size: 12};
        },

        getParsingProducts(): ParserProductsType[]{
            return this.parserProducts.getParserProducts;
        }
    },
    
    data() {
        return {
            parserProducts: useParserProductsStore(),
            menuStore: useMenuStore(),

            Helper: Helper,

        };
    },
    
    methods: {
        async handlerCreatedElement(){
            let currectCategory = this.getCurrectCategoryFromURL();
            if(this.parserProducts.getParserCategories[<string> currectCategory]?.length){
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, true);
                this.menuStore.setSubcategoriesList(this.menuStore, this.parserProducts.getParserCategories[<string> currectCategory]);
                this.parserProducts.setParserProducts(this.parserProducts, {page: 1, category: currectCategory});
            } else {
                await this.parserProducts.setParserCategories(this.parserProducts);
                await this.parserProducts.setParserProducts(this.parserProducts, {page: 1, category: currectCategory});
                await this.parserProducts.setImgOnCategory(this.parserProducts);
                this.menuStore.setMenuSuncategoriesShow(this.menuStore, true);
                this.menuStore.setSubcategoriesList(this.menuStore, this.parserProducts.getParserCategories[<string> currectCategory])
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
        shopItem,
    },

    async created(){
       await this.handlerCreatedElement();
    }
});
</script>
    
<style scoped lang='scss'>
</style>
