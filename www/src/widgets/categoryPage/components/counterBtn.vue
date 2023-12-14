<template>
    <div
        class="d-flex">
        <v-btn
            @click.stop="handlerPlusCount"
            color="primary"
            :variant="'text'">
            +
        </v-btn>
        <v-text-field
            class="mx-width-100 pa-0 input-top-p-0 input-l-p-8"
            :variant="'underlined'"
            v-model:model-value="getCountProduct"
            :rules="rules">
        </v-text-field>
        <v-btn
            @click.stop="handlerMinCount"
            color="primary"
            :variant="'text'">
            -
        </v-btn>
    </div>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        countProduct: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        'update:countProduct': (str: string) => true
    },
    
    computed: {
        getCountProduct: {
            get(){
                return this.countProduct;
            },
            set(str: string){
                this.$emit('update:countProduct', str);
            }
        }
    },
    
    data() {
        return {
            rules: [
                (value: string) => this.validInputCount(value)
            ]
        };
    },
    
    methods: {
        validInputCount(value: string){
            if(value.length > 5){
                return 'Превышен лимит покупок';
            }
            if(!/\d/g.test(value)){
                return 'Неправильный формат';
            }
            return true;
        },
        
        handlerPlusCount(){
            if(this.rules[0](this.getCountProduct)){
                this.getCountProduct = String(Number(this.getCountProduct) + 1);
            }
        },

        handlerMinCount(){
            if(this.rules[0](this.getCountProduct)){
                if(Number(this.getCountProduct)) this.getCountProduct = String(Number(this.getCountProduct) - 1);
            }
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>