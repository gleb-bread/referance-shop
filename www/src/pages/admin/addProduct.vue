<template>
    <v-container>
        <v-form 
            fast-fail 
            ref="form"
            @submit.prevent>

            <str-field
                :label-filed="'Наименование продукта'"
                v-model:value-product="titleProduct">
            </str-field>

            <select-str-field
                :label-filed="'Категория продукта'"
                v-model:value-field="categoryProduct"
                :items-list="getCategoriesList"
                v-model:value-text-field="categoryTextProduct">
            </select-str-field>

            <select-str-field
                :label-filed="'Подкатегория продукта'"
                v-model:value-field="subCatergoryProduct"
                :items-list="getSubctegoriesList"
                v-model:value-text-field="subCategoryTextProduct">
            </select-str-field>

            <characteristic-block
                v-model:characteristics-list="characteristicsList">
            </characteristic-block>

            <price-field
                v-model:price-product="priceProduct">
            </price-field>

            <v-btn 
                type="submit" 
                color="success"
                block 
                @click.stop="handlerAddProduct"
                class="mt-2">Добавить товар</v-btn>
        </v-form>
    </v-container>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import strField from '@/widgets/admin/addProduct/strField.vue';
import priceField from '@/widgets/admin/addProduct/priceField.vue';
import selectStrField from '@/widgets/admin/addProduct/selectStrField.vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
import characteristicBlock from '@/widgets/admin/addProduct/characteristicBlock.vue';
import { useProductsStore } from '@/app/stores/products';
import { useRequestHandler } from '@/app/stores/requestHandler';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getCategoriesList(): string[]{
            return [...Object.keys(this.ParserProductsStore.getParserCategories), 'Другое'];
        },
        
        getSubctegoriesList(){

            let result = [] as string[];

            Object.values(this.ParserProductsStore.getParserCategories).forEach(item => {
                result = result.concat(item);
            })

            return [...result, 'Другое'];
        }
    },
    
    data() {
        return {
            titleProduct: '',
            priceProduct: '',
            categoryProduct: '',
            categoryTextProduct: '',
            subCatergoryProduct: '',
            subCategoryTextProduct: '',
            characteristicsList: [] as {key: string, value: string}[],
            

            ParserProductsStore: useParserProductsStore(),
            productsStore: useProductsStore(),
            requestHandler: useRequestHandler(),
        };
    },
    
    methods: {
        async handlerAddProduct(){
            //@ts-ignore
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                let currectObj = {
                    title: this.titleProduct,
                    price: Number(this.priceProduct) ? Number(this.priceProduct) : 0,
                    category: this.categoryProduct === 'Другое' ? this.categoryTextProduct : this.categoryProduct,
                    subcategory: this.subCatergoryProduct === 'Другое' ? this.subCategoryTextProduct : this.subCatergoryProduct,
                    characteristics: this.handlerGetCurrectCharacteristics(),
                }

                let result = await this.productsStore.addProducts(this.productsStore, currectObj);
                if(result){
                    this.requestHandler.setAnswerRequest(this.requestHandler, true);
                    this.requestHandler.setTextRequest(this.requestHandler, 'Товар успешно добавлен');
                } else {
                    this.requestHandler.setAnswerRequest(this.requestHandler, false);
                    this.requestHandler.setTextRequest(this.requestHandler, 'Не удалось добавить товар');
                }
                
            }
        },

        handlerGetCurrectCharacteristics(){
            let obj = {} as any;
            this.characteristicsList.forEach(item => {
                obj[item.key] = item.value;
            });

            return JSON.stringify(obj);
        }
    },
    
    components: {
        strField,
        priceField,
        selectStrField,
        characteristicBlock
    },

    created(){
        this.ParserProductsStore.setParserCategories(this.ParserProductsStore);
    },
});
</script>
    
<style scoped lang='scss'>
</style>