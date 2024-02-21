<template>
    <v-app-bar-nav-icon>
        <v-btn
            @click.stop="getShowMenuNavigation = !getShowMenuNavigation"
            icon="mdi-menu">
        </v-btn>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            {{  }}
        </v-app-bar-title>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';

    
export default defineComponent({
    props: {
        
    },
    
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
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>