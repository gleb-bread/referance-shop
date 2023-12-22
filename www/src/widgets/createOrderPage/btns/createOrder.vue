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
                        :error="errroPromo"
                        :error-messages="messageErrroPromo"
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
import { usePromoStore } from '@/app/stores/promo';

    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            showDialog: false,
            promo: '',
            errroPromo: false,
            messageErrroPromo: '',

            ordersStore: useOrdersStore(),
            promoStore: usePromoStore(),

            handlerRequest: useRequestHandler(),
        };
    },
    
    methods: {
        async handlerCreateOrder(){
            let promoId = null as number | string | null;

            if(this.promo){
                promoId = await this.getDiscountFromPromo();
            }

            if(typeof promoId != 'string' || promoId === null){
                this.promoStore
                let result = await this.ordersStore.addOrder(this.ordersStore, {'promo_id': <number> promoId});

                if(result){
                    this.showDialog = false;
                    this.handlerRequest.setAnswerRequest(this.handlerRequest, true);
                    this.handlerRequest.setTextRequest(this.handlerRequest, 'Заказ успешно оформлен');
                } else {
                    this.handlerRequest.setAnswerRequest(this.handlerRequest, false);
                    this.handlerRequest.setTextRequest(this.handlerRequest, 'Не оформить заказ');
                }
            } else {
                this.errroPromo = true;
                this.messageErrroPromo = promoId;
            }
        },

        async getDiscountFromPromo(): Promise<number | string>{
            let result = await this.promoStore.checkPromo(this.promoStore, this.promo);
            
            return result;
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>