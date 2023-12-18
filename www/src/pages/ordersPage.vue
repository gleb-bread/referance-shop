<template>
    <template v-if="OrdersStore.getLoading || OrdersStore.getError">
      <div
        class="w-screen h-screen d-flex justify-center"
        :class="{ 'align-center': !OrdersStore.getError }">
        <v-progress-circular
          v-if="OrdersStore.getLoading && !OrdersStore.getError"
          indeterminate
          :size="58"
          :width="8"
          color="primary">
        </v-progress-circular>
        <v-alert
            v-if="OrdersStore.getError"
            max-height="100px"
            type="error"
            :rounded="false"
            title="Ошибка"
            text="Произошла ошибка загрузки">
        </v-alert>
      </div>
  </template>
  <template v-else>
    <v-virtual-scroll
        v-if="getOrders.length"
        class="pa-10"
        ref="shop-catalog"
        height="calc(100vh - 64px)"
        :items="Helper.chunk<OrderType>(getOrders, currectCell.cells)">
        <template #default="{ item }">
            <v-row>
                <v-col
                    :cols="currectCell.size"
                    v-for="itemOrder in item">
                    <order-item
                        :order-item="itemOrder">
                    </order-item>
                </v-col>
            </v-row>
        </template>
    </v-virtual-scroll>
    <template v-else>
        <div class="text-center">
            Пока здесь чего нет.
        </div>
    </template>
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useOrdersStore } from '@/app/stores/orders';
import * as Helper from '@/shared/helpers/helper';
import { OrderType } from '@/app/stores/types';
import orderItem from '@/widgets/ordersPage/orderItem.vue';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        currectCell(): {cells: number, size: number}{
            if(this.$vuetify.display.width > 2100){
                return {cells: 6, size: 2};
            } else if(this.$vuetify.display.width > 1800){
                return {cells: 4, size: 3};
            } else if(this.$vuetify.display.width > 1024){
                return {cells: 3, size: 4};
            } else if(this.$vuetify.display.width > 800){
                return {cells: 2, size: 6};
            } else if (this.$vuetify.display.width > 500) {
                return {cells: 1, size: 12};
            }
            return {cells: 1, size: 12};
        },

        getOrders() {
            return this.OrdersStore.getOrders;
        }
    },
    
    data() {
        return {
            OrdersStore: useOrdersStore(),

            Helper: Helper,
            
        };
    },
    
    methods: {
        
    },
    
    components: {
        orderItem
    },

    created(){
        this.OrdersStore.setOrders(this.OrdersStore);
    }
});
</script>
    
<style scoped lang='scss'>
</style>