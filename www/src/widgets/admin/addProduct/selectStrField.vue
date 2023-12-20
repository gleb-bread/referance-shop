<template>
    <v-select
        :items="itemsList"
        variant="underlined"
        v-model:model-value="getValueField"
        :label="labelFiled">
    </v-select>
    
    <v-fade-transition>
        <template v-if="getValueField === 'Другое'">
            <v-text-field
                label="Заполните поле"
                variant="underlined"
                :rules="rules">
            </v-text-field>
        </template>
    </v-fade-transition>
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

        valueTextField: {
            type: String,
            required: true,
        },

        labelFiled: {
            type: String,
            required: true,
        },

        itemsList: {
            type: Array as PropType<string[]>,
            required: true,
        }
    },
    
    emits: {
        'update:valueField': (str: string) => true,
        'update:valueTextField': (str: string) => true
    },
    
    computed: {
        getValueField: {
            get(){
                return this.valueField;
            },

            set(str: string){
                if(typeof this.rules[0](str) != 'string'){
                    this.$emit('update:valueField', str);
                }
            }
        },

        getValueTextField: {
            get(){
                return this.valueTextField;
            },

            set(str: string){
                if(typeof this.rules[0](str) != 'string'){
                    this.$emit('update:valueTextField', str);
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