<template>
    <v-text-field
        variant="underlined"
        label="Цена товара"
        v-model:model-value="getPriceProduct"
        prefix="₽"
        :rules="rules">
    </v-text-field>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import * as Helper from '@/shared/helpers/helper';
    
export default defineComponent({
    props: {
        priceProduct: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        'update:priceProduct': (str: string) => true
    },
    
    computed: {
        getPriceProduct: {
            get(){
                return this.Helper.convertMoneyTypeWithoutRuble(this.priceProduct);
            },

            set(str: string){
                if(typeof this.rules[0](str) != 'string'){
                    this.$emit('update:priceProduct', str.replace(' ', ''));
                }
            }
        }
    },
    
    data() {
        return {
            rules: [
                (value:string) => {
                    return (Boolean(value) && /\d/g.test(value)) || 'Нельзя оставить пустое поле'
                }
            ],
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