<template>
    <v-navigation-drawer
        v-model:model-value="getShowNavigation"
        color="secondary">
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
import * as HelperCookie from '@/shared/helpers/helperCookie';
import { getCurrectURL } from '@/shared/helpers/helperAPI';
import axios from 'axios';
import { v4 } from 'uuid';
    
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

    async created(){
        
    }
});
</script>
    
<style scoped lang='scss'>
</style>