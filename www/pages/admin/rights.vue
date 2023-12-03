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
            title: 'Права',
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
  title: 'Права',
})
</script>

    
<style scoped lang='scss'>
</style>