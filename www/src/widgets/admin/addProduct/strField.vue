<template>
    <v-text-field
        variant="underlined"
        :label="labelFiled"
        v-model:model-value="getValueProduct"
        :rules="rules">
    </v-text-field>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        valueProduct: {
            type: String,
            required: true,
        },

        labelFiled: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        'update:valueProduct': (str: string) => true
    },
    
    computed: {
        getValueProduct: {
            get(){
                return this.valueProduct;
            },

            set(str: string){
                if(this.rules[0](str)){
                    this.$emit('update:valueProduct', str);
                }
            }
        }
    },
    
    data() {
        return {
           rules: [
                (value:string) => {
                    return Boolean(value) || 'Нельзя оставить пустое поле'
                }
           ] 
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