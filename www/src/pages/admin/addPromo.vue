<template>
    <label class="d-block py-3 text-center font-weight-bold">Добавить промокод</label>
    <v-table>
        <thead>
            <th
                class="py-5" 
                v-for="title in titleHead">
                {{ title }}
            </th>
        </thead>
        <tbody>
            <tr>
                <td
                    class="w-50">
                    <v-text-field
                        variant="underlined"
                        :density="'compact'"
                        :rules="rights.code"
                        v-model:model-value="nameNewPromo">
                    </v-text-field>
                </td>
                <td
                    class="w-50">
                    <v-text-field
                        variant="underlined"
                        :density="'compact'"
                        :rules="rights.discount"
                        v-model:model-value="nameDiscountPromo">
                    </v-text-field>
                </td>
            </tr>
        </tbody>
    </v-table>
    <div class="d-flex justify-end my-5 mr-3">
        <v-btn 
            @click.stop="handlerAddPromo"
            color="success">
            Добавить
        </v-btn>
    </div>
    <v-table>
        <thead>
            <th
                class="py-5 text-left pl-3"
                v-for="title in titleBody">
                {{ title }}
            </th>
        </thead>
        <tbody>
            <tr
                v-for="promo in getPromos">
                <td>
                    {{ promo.promo_code }}
                </td>
                <td>
                    {{ promo.promo_discount }}
                </td>
                <td>
                    {{ promo.promo_archive ? 'Архивная' : 'Активная' }}
                </td>
                <template
                    v-if="!promo.promo_archive">
                    <td
                        class="max-w-50">
                        <v-btn
                            variant="text"
                            @click.stop="handlerArchivePromo(promo.promo_id)"
                            icon="mdi-close">
                        </v-btn>
                    </td>
                </template>
            </tr>
        </tbody>
    </v-table>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { usePromoStore } from '@/app/stores/promo';
import { PromoType, PromoAddedType, PromoOptions } from '@/app/stores/types';
import { useRequestHandler } from '@/app/stores/requestHandler';
    
export default defineComponent({
    props: {
        
    },
    
    emits: {
        
    },
    
    computed: {
        getPromos(): PromoType[]{
            return this.promoStore.getPromos;
        } 
    },
    
    data() {
        return {
            titleHead: [
                'Наименование промокода',
                'Cкидка'
            ],

            titleBody: [
                'Наименование промокода',
                'Скидка',
                'Статус'
            ],

            nameNewPromo: '',
            nameDiscountPromo: '',

            rights: {
                discount: [
                    (value: string) => /\d/g.test(value) && !!value || 'Не правильный формат',
                ],
                code: [
                    (value: string) => !!value || 'Нельзя оставить пустое поле',
                ],
            },

            promoStore: usePromoStore(),
            requestHandlerStore: useRequestHandler(),
        };
    },
    
    methods: {
        async handlerAddPromo(){
            if((typeof this.rights.code[0](this.nameNewPromo) != 'string') && (typeof this.rights.discount[0](this.nameDiscountPromo))){
                let newPromo = {
                    promo_code: this.nameNewPromo,
                    promo_discount: Number(this.nameDiscountPromo),
                } as PromoAddedType;

                let result = await this.promoStore.addPromo(this.promoStore, newPromo);

                if(!result){
                    this.requestHandlerStore.setAnswerRequest(this.requestHandlerStore, false);
                    this.requestHandlerStore.setTextRequest(this.requestHandlerStore, 'Не удалось добавить промо-код');
                }

            }
        },

        async handlerArchivePromo(idPromo: number){
            let changePromo = {
                promo_id: idPromo,
                promo_archive: true,
                method: 'patch',
            } as PromoOptions;

            let result = await this.promoStore.changePromo(this.promoStore, changePromo);

            if(!result){
                this.requestHandlerStore.setAnswerRequest(this.requestHandlerStore, false);
                this.requestHandlerStore.setTextRequest(this.requestHandlerStore, 'Не удалось архивировать промо-код');
            }
        }
    },
    
    components: {
        
    },

    created(){
        this.promoStore.setPromos(this.promoStore);
    }
});
</script>
    
<style scoped lang='scss'>
.max-w-50{
    max-width: 50px;
}
</style>