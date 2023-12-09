<template>
    <v-app-bar
        color="primary"
        :elevation="2">
        <v-app-bar-nav-icon>
            <v-btn
                @click.stop="getShowMenuNavigation = !getShowMenuNavigation"
                icon="mdi-menu">
            </v-btn>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            Каталог
        </v-app-bar-title>
    </v-app-bar>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
    
export default defineComponent({
    
    props: {
        showMenuNavigation: {
            type: Boolean,
            required: true,
        }
    },

    emits: {
        'update:showMenuNavigation': (flag: boolean) => true,
    },
    
    computed: {
        getShowMenuNavigation: {
            get(){
                return this.showMenuNavigation;
            },
            set(flag: boolean){
                this.$emit('update:showMenuNavigation', flag);
            }
        }
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