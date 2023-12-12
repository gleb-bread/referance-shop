<template>
    <v-col>
        <v-row>
            <counter-btn>
            </counter-btn>
        </v-row>
        <v-row>
            <buy-btn>
            </buy-btn>
        </v-row>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import counterBtn from './btns/counterBtn.vue';
import buyBtn from './btns/buyBtn.vue';
    
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
        buyBtn
    },
});
</script>
    
<style scoped lang='scss'>
</style>