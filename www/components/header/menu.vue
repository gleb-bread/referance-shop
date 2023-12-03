<template>
    <v-navigation-drawer
        color="secondary"
        v-model="store.getMenuShow">
        <v-list
            v-model:opened="open">
            <v-list-item
                v-for="item in itemMenuList"
                :title="item.title"
                :prepend-icon="item.prependIcon"
                :to="item.link">
            </v-list-item>
            <v-list-group
                value="Admin">
                <template #activator="{props}">
                    <v-list-item
                        v-bind="props"
                        title="Админ"
                        :prepend-icon="'mdi-shield-crown'">
                    </v-list-item>
                </template>
                <v-list-item
                    v-for="item in adminItemList"
                    :title="item.title"
                    :prepend-icon="item.prependIcon"
                    :to="item.link">
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { useCookie } from 'nuxt/app';
import { useMenuStore } from '~/stores/menu';
    
export default defineComponent({
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            store: useMenuStore(),

            groupListAdmin: false,

            itemMenuList: [
                {
                    title: 'Главная',
                    link: '/',
                    prependIcon: 'mdi-home-variant',
                },
            ],

            adminItemList: [
                {
                    title: 'Логи',
                    link: '/admin/logs',
                    prependIcon: 'mdi-cctv',
                },
                {
                    title: 'Права',
                    link: '/admin/rights',
                    prependIcon: 'mdi-security',
                }
            ],

            open: [],
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