<template>
    <v-navigation-drawer>
        <v-list-item title="Навигация"></v-list-item>
        <v-divider></v-divider>
        <template
            v-for="navigation in navigations">
            <v-list-item 
            :to="navigation.link"
            :prepend-icon="navigation.prependIcon"
            link>
            {{ navigation.text }}
        </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        showNavigation: {
            type: Boolean,
            required: true,
        }
    },
    
    emits: {
        'update:showNavigation': (flag: boolean) => true
    },
    
    computed: {
        getShowNavigation: {
            get(){
                return this.showNavigation;
            },

            set(flag: boolean){
                this.$emit('update:showNavigation', flag);
            }
        }
    },
    
    data() {
        return {
            navigations: [
                {
                    prependIcon: 'mdi-home',
                    text: 'Главная',
                    link: '/'
                }
            ]
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