<template>
    <v-col>
        <div
            class="d-flex">
            <v-btn
                @click.stop="handlerPlusCount"
                variant="text">
                +
            </v-btn>
            <v-text-field
                v-model:model-value="getCurrectValue"
                class="custom-input-p-0"
                :rules="rules"
                :variant="'underlined'">
            </v-text-field>
            <v-btn
                @click.stop="handlerMinCount"
                variant="text">
                -
            </v-btn>
        </div>
        <div
            class="d-flex">
            <v-fade-transition group>
                <v-btn
                    v-if="Number(getCurrectValue) > countItems"
                    @click.stop="handlerChangeCount"
                    color="success"
                    class="w-70"
                    :key="1">
                    Добавить
                </v-btn>
                <v-btn
                    v-else-if="(Number(getCurrectValue) < countItems) && countItems"
                    @click.stop="handlerChangeCount"
                    color="error"
                    class="w-70"
                    :key="2">
                    Уменьшить
                </v-btn>
            </v-fade-transition>
            <div
                class="ms-auto">
                <v-btn
                    @click.stop="handlerDeleteItem" 
                    rounded="lg"
                    size="38"
                    icon="mdi-trash-can"
                    color="error">
                </v-btn>
            </div>
        </div>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useCartStore } from '@/app/stores/cart';
import { useRequestHandler } from '@/app/stores/requestHandler';
import { toHandlers } from 'vue';
    
export default defineComponent({
    props: {
        countItems: {
            type: Number,
            required: true,
        },

        idCart: {
            type: Number,
            required: true,
        }
    },
    
    emits: {
        
    },
    
    computed: {
        getCurrectValue:{
            get(){
                if(!this.currectValue){
                    this.currectValue = String(this.countItems);
                }

                return this.currectValue;
            },

            set(str: string){
                this.currectValue = str;
            }
        }
    },
    
    data() {
        return {

            currectValue: null as null | string,
            cartStore: useCartStore(),
            requestHandler: useRequestHandler(),

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
            if(this.rules[0](this.getCurrectValue)){
                this.getCurrectValue = String(Number(this.getCurrectValue) + 1);
            }
        },

        handlerMinCount(){
            if(this.rules[0](this.getCurrectValue)){
                if(Number(this.getCurrectValue)) this.getCurrectValue = String(Number(this.getCurrectValue) - 1);
            }
        },

        async handlerChangeCount(){
            if(typeof this.rules[0](this.getCurrectValue) != 'string'){
                let result = await this.cartStore.changeCount(this.cartStore, {cart_count: Number(this.getCurrectValue), cart_id: this.idCart});

                if(!result){
                    this.requestHandler.setAnswerRequest(this.requestHandler, false);
                    this.requestHandler.setTextRequest(this.requestHandler, 'Не удалось изменить значение в корзине');
                }
            }
        },

        async handlerDeleteItem(){
            let result = await this.cartStore.changeCount(this.cartStore, {cart_count: 0, cart_id: this.idCart});

            if(!result){
                this.requestHandler.setAnswerRequest(this.requestHandler, false);
                this.requestHandler.setTextRequest(this.requestHandler, 'Не удалось удалить товар из корзины');
            }
        }
    },
    
    components: {
        
    },

    watch: {
        countItems: function(newVal: number){
            this.currectValue = '';
        }
    }
});
</script>
    
<style scoped lang='scss'>
</style>

<style lang="scss">
.custom-input-p-0{
    input {
        padding: 0;
        padding-left: 4px;
    }
}

</style>