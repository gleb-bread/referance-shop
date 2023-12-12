<template>
    <v-col>
        <v-row
            justify="start">
            <counter-btn
                class="max-w-300 min-w-300">
            </counter-btn>
            <v-col
                class="max-w-300 d-flex">
                <buy-btn>
                </buy-btn>
                <restore-btn>
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
            
        };
    },
    
    methods: {
        
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