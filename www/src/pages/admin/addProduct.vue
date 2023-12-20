<template>
    <v-container>
        <v-form fast-fail @submit.prevent>

            <str-field
                :label-filed="'Наименование продукта'"
                v-model:value-product="titleProduct">
            </str-field>

            <str-field
                :label-filed="'Категория продукта'"
                v-model:value-product="categoryProduct">
            </str-field>

            <str-field
                :label-filed="'Подкатегория продукта'"
                v-model:value-product="subCatergoryProduct">
            </str-field>

            <price-field
                v-model:price-product="priceProduct">
            </price-field>

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import strField from '@/widgets/admin/addProduct/strField.vue';
import priceField from '@/widgets/admin/addProduct/priceField.vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            titleProduct: '',
            priceProduct: '',
            categoryProduct: '',
            subCatergoryProduct: '',

            ParserProductsStore: useParserProductsStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        strField,
        priceField
    },

    created(){
        this.ParserProductsStore.setParserCategories(this.ParserProductsStore);
    }
});
</script>
    
<style scoped lang='scss'>
</style>