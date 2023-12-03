<template>
    
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
          title: 'Логи',
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    mounted(){
      this.menuStore.setMenuTitle(this.menuStore, this.title);
    }

}); 
</script>

<script lang="ts" setup>
useHead({
  title: 'Логи',
});
</script>
    
<style scoped lang='scss'>
</style>