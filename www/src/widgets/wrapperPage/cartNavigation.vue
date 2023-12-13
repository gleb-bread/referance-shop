<template>
    <v-navigation-drawer
        v-model="getCartShow"
        color="secondary">
        <v-list-item title="Корзина"></v-list-item>
        <v-divider></v-divider>
        <!-- <template
            v-for="navigation in navigations">
            <v-list-item 
                :to="navigation.link"
                :prepend-icon="navigation.prependIcon"
                link>
                {{ navigation.text }}
        </v-list-item>
        </template> -->
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useMenuStore } from '@/app/stores/menu';
    
export default defineComponent({
    emits: {
        
    },
    
    computed: {
        getCartShow: {
            get(){
                console.log(this.menuStore.getCartShow);
                return this.menuStore.getCartShow;
            },
            set(flag: boolean){
                this.menuStore.setCartShow(this.menuStore, flag);
            }
        }
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
});
</script>
    
<style scoped lang='scss'>
</style>