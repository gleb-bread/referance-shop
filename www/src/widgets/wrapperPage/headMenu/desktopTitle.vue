<template>
    <v-app-bar-title>
        <div>
            <template
                v-for="link in menuLinks">
                <v-btn
                    variant="text"
                    :href="link.link"
                    color="primary"
                    :active="Boolean(link.link === getActiveLink())"
                    class="mr-3 v-btn--menu-links">
                    {{ link.title }}
                </v-btn>
            </template>
        </div>
    </v-app-bar-title>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { menuLinks } from '@/shared/struct/menu/links';
    
export default defineComponent({
    props: {
        
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            menuLinks: menuLinks,
        };
    },
    
    methods: {
        getActiveLink(){
            return window.location.pathname;
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>