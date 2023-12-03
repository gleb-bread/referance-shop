<template>
    <v-container
        class="h-100-vh w-100-wh">
        <div class="d-flex flex-1-1">
            <rights-table-width-single-cell
                :title-cell="'Наименование группы'"
                :values-list="['Пизда','Пизда','Пизда','Пизда']">
            </rights-table-width-single-cell>
            <rights-table-width-single-cell
                :title-cell="'Права'"
                :values-list="['Пизда','Пизда','Пизда','Пизда']">
            </rights-table-width-single-cell>
        </div>
    </v-container>
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

            title: 'Cоздание прав',
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

<script setup lang="ts">
useHead({
  title: 'Cоздание прав',
});
</script>
    
<style scoped lang='scss'>
</style>