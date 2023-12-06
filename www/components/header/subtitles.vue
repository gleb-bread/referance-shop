<template>
    <v-navigation-drawer
        v-if="getCurrectCategory != false"
        color="secondary"
        v-model="getSubcategoriesShow">
        <v-list>
            <v-list-item
                v-for="item in parserProducts.getParserCategories[getCurrectCategory]"
                :title="item">
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getSubcategoriesShow: {
            get(){
                console.log(this.menuStore.getSubcategoriesShow);
                return this.menuStore.getSubcategoriesShow;
            },
            set(flag: boolean){
                this.menuStore.setMenuShow(this.menuStore, flag);
            }
        },

        getCurrectCategory(){
            return this.menuStore.getCurrectCategory;
        }
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
            parserProducts: useParserProductsStore(),
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