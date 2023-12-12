<template>
    <v-btn
        @click.stop="$emit('handlerClearStore', true)"
        color="secondary"
        :variant="'text'">
            Сбросить
    </v-btn>
</template>
<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    
    emits: {
        'handlerClearStore': (flag: boolean) => true
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
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>