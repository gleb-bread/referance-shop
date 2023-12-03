<template>
    <v-container>
        
    </v-container>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useMenuStore } from '~/stores/menu';
    
export default defineComponent({
    props: {
        
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    mounted(){
        this.menuStore.setMenuTitle(this.menuStore, 'Права');
    }
});
</script>

<script lang="ts" setup>
useHead({
  title: 'Права',
})
</script>

    
<style scoped lang='scss'>
</style>