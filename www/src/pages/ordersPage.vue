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
    
  </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useOrdersStore } from '@/app/stores/orders';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getOrders() {
            return this.OrdersStore.getOrders;
        }
    },
    
    data() {
        return {
            OrdersStore: useOrdersStore(),
            
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    created(){
        this.OrdersStore.setOrders(this.OrdersStore);
    }
});
</script>
    
<style scoped lang='scss'>
</style>