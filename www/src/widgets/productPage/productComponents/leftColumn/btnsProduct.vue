<template>
    <v-col>
        <v-row
            justify="start">
            <counter-btn
                :count-clear="countClear"
                class="max-w-300 min-w-300">
            </counter-btn>
            <v-col
                class="max-w-300 d-flex">
                <buy-btn>
                </buy-btn>
                <restore-btn
                    @handler-clear-store="handlerClearStore">
                </restore-btn>
            </v-col>
        </v-row>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import counterBtn from './btns/counterBtn.vue';
import buyBtn from './btns/buyBtn.vue';
import restoreBtn from './btns/restoreBtn.vue';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            countClear: 0,
        };
    },
    
    methods: {
        handlerClearStore(){
            this.countClear += 1;
        }
    },
    
    components: {
        counterBtn,
        buyBtn,
        restoreBtn
    },
});
</script>
    
<style scoped lang='scss'>
.max-w-300{
    max-width: 300px;
}

.min-w-300{
    min-width: 300px;
}
</style>