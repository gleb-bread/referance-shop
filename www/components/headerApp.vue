<template>
    <v-app-bar 
        :elevation="2"
        color="primary">
        <template #prepend>
            <v-btn
                @click.stop="handlerClickMenu"
                icon="mdi-menu">
            </v-btn>
        </template>
        <v-app-bar-title>
            {{ getTitle }} 
        </v-app-bar-title>
    </v-app-bar>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useMenuStore } from '~/stores/menu';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getTitle(){
            return this.menuStore.getMenuTitle;
        }
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
        };
    },
    
    methods: {
        handlerClickMenu(){
            this.menuStore.setSubcategoriesShowShow(this.menuStore, false);
            this.menuStore.setMenuShow(this.menuStore, !this.menuStore.getMenuShow);
        }
    },

    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>