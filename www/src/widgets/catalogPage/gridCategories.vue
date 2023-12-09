<template>
    <v-virtual-scroll
        class="pa-10"
        :items="Helper.chunk<string>(Object.keys(getImageCategories), currectCell.cells)">
        <template #default="{ item }">
            <v-row>
                <v-col
                    :cols="currectCell.size"
                    v-for="categoryKey in item">
                    <category-item
                        :category-img="getImageCategories[categoryKey]"
                        :category-title="categoryKey">
                    </category-item>
                </v-col>
            </v-row>
        </template>
    </v-virtual-scroll>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts/index';
import * as Helper from '@/shared/helpers/helper';
    
export default defineComponent({
    props: {
        
    },
    
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
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>