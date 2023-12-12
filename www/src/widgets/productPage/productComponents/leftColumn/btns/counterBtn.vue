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
            :model-value="valueProduct"
            :rules="rules"
            @update:model-value="valueProduct = $event">
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
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            valueProduct: '0',

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
            if(this.rules[0](this.valueProduct)){
                this.valueProduct = String(Number(this.valueProduct) + 1);
            }
        },

        handlerMinCount(){
            if(this.rules[0](this.valueProduct)){
                if(Number(this.valueProduct)) this.valueProduct = String(Number(this.valueProduct) - 1);
            }
        }
    },
    
    components: {
        
    },

    watch: {
        countClear: function(newVal: number){
            this.valueProduct = '0';
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