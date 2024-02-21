<template>
    
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
    
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

    created(){
        this.menuStore.setMenuTitle(this.menuStore, 'Главная');
    }
});
</script>
    
<style scoped lang='scss'>
</style>