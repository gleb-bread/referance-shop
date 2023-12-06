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
        <template v-slot:append>
        <v-fade-transition>
            <v-btn 
                v-if="(typeof menuStore.getCurrectCategory != 'boolean')"
                icon="mdi-dots-vertical"
                @click.stop="handlerClickSubcategoryList">
            </v-btn>
        </v-fade-transition>
        </template>
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
            this.menuStore.setMenuShow(this.menuStore, !this.menuStore.getMenuShow);
        },

        handlerClickSubcategoryList(){
            this.menuStore.setSubcategoriesShow(this.menuStore, !this.menuStore.getSubcategoriesShow);
        }
    },

    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>