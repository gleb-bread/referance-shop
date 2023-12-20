<template>
    <v-select
        :items="itemsProducts"
        v-model:model-value="getValueField"
        :label="labelFiled"
    ></v-select>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        valueField: {
            type: String,
            required: true,
        },

        labelFiled: {
            type: String,
            required: true,
        },

        itemsProducts: {
            type: Array as PropType<string[]>,
            required: true,
        }
    },
    
    emits: {
        'update:valueField': (str: string) => true
    },
    
    computed: {
        getValueField: {
            get(){
                return this.valueField;
            },

            set(str: string){
                if(this.rules[0](str)){
                    this.$emit('update:valueField', str);
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