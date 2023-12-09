<template>
    <v-virtual-scroll
        class="pa-10"
        height="calc(100vh - 64px)"
        :items="Helper.chunk<string>(Object.keys(getImageCategories), currectCell.cells)">
        <template #default="{ item }">
            <v-row>
                <v-col
                    :cols="currectCell.size"
                    v-for="categoryKey in item">
                    <category-item
                        :category-img="getImageCategories[categoryKey]"
                        :category-title="categoryKey ? categoryKey : 'Другое'">
                    </category-item>
                </v-col>
            </v-row>
        </template>
    </v-virtual-scroll>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts/index';
import * as Helper from '@/shared/helpers/helper';
import categoryItem from './gridCategories/categoryItem.vue';
    
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

        getParsingProducts(){
            return this.parserProductStore.getParserProducts;
        },

        getImageCategories(){
            return this.parserProductStore.getParserImageCategories;
        }
    },
    
    data() {
        return {
            parserProductStore: useParserProductsStore(),
            Helper: Helper,
        };
    },
    
    methods: {
        
    },

    components: {
        categoryItem
    },
});
</script>
    
<style scoped lang='scss'>
</style>