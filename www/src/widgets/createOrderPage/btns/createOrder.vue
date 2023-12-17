<template>
    <v-btn 
        color="success">
        Оформить заказ
        <v-dialog
            width="300"
            v-model:model-value="showDialog"
            activator="parent">
            <v-card>
                <v-toolbar 
                    color="primary"
                    title="Промокод">
                    <template #append>
                        <v-btn 
                            icon="mdi-close"
                            @click.stop="showDialog = false">
                        </v-btn>
                    </template>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                        variant="underlined"
                        placeholder="У вас есть промокод?"
                        v-model:model-value="promo"
                        label="Промокод">
                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <div
                        class="d-flex justify-end">
                        <v-btn 
                            variant="text"
                            color="primary"
                            @click.stop="handlerCreateOrder">
                            Оформить
                        </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useRequestHandler } from '@/app/stores/requestHandler';
import { useOrdersStore } from '@/app/stores/orders';

    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            showDialog: false,
            promo: '',

            ordersStore: useOrdersStore(),

            handlerRequest: useRequestHandler(),
        };
    },
    
    methods: {
        async handlerCreateOrder(){
            let result = await this.ordersStore.addOrder(this.ordersStore, {order_discount: 0});

            if(result){
                this.showDialog = false;
                this.handlerRequest.setAnswerRequest(this.handlerRequest, true);
                this.handlerRequest.setTextRequest(this.handlerRequest, 'Заказ успешно оформлен');
            } else {
                this.handlerRequest.setAnswerRequest(this.handlerRequest, false);
                this.handlerRequest.setTextRequest(this.handlerRequest, 'Не оформить заказ');
            }
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>