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
            :model-value="getModelValue"
            :rules="rules"
            @update:model-value="getModelValue = $event">
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
    
export default defineComponent({

    props: {
        countClear: {
            type: Number,
            required: true,
        },

        modelValue: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        'update:modelValue': (str: string) => true
    },
    
    computed: {
        getModelValue: {
            get(){
                return this.modelValue;
            },

            set(str: string){
                if(typeof this.rules[0](str) != 'string'){
                    this.$emit('update:modelValue', str);
                }
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
            if(this.rules[0](this.getModelValue)){
                this.getModelValue = String(Number(this.getModelValue) + 1);
            }
        },

        handlerMinCount(){
            if(this.rules[0](this.getModelValue)){
                if(Number(this.getModelValue)) this.getModelValue = String(Number(this.getModelValue) - 1);
            }
        }
    },
    
    components: {
        
    },

    watch: {
        countClear: function(newVal: number){
            this.getModelValue = '0';
        }
    }
});
</script>
    
<style scoped lang='scss'>
.mx-width-100{
    max-width: 100px;
}
</style>

<style lang='scss'>
.input-top-p-0{
    input{
        padding-top: 0;
    }
}

.input-l-p-8{
    input {
        padding-left: 8px;
    }
}
</style>