<template>
    <v-virtual-scroll
        v-if="getParsingProducts.length"
        class="pa-10"
        :height="runtimeConfig.public.heightWindow"
        :items="StructHelper.chunk<ParserProductsType>(getParsingProducts, currectCell.cells)">
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

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsType } from '~/stores/types';
import * as StructHelper from '~/shared/helpers/structHelper';
import { ParserProductsFilter } from '~/stores/types';
    
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
            return this.ParserProducts.getParserProducts;
        }
    },
    
    data() {
        return {

            StructHelper: StructHelper,

            response: [] as ParserProductsType[],

            ParserProducts: useParserProductsStore(),
            menuStore: useMenuStore(),
            
            runtimeConfig: useRuntimeConfig(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    async mounted() {
        
    }
});
</script>

<style scoped lang='scss'>
</style>