<template>
    
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
            menuStore: useMenuStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    mounted(){
        this.menuStore.setMenuTitle(this.menuStore, 'Cоздание прав');
    }
});
</script>
    
<style scoped lang='scss'>
</style>