<template>
    <v-navigation-drawer
        location="right"
        v-if="(typeof getCurrectCategory != 'boolean')"
        color="secondary"
        v-model="getSubcategoriesShow">
        <v-list>
            <v-fade-transition group>
                <v-list-item
                    link
                    v-for="(item, index) in parserProducts.getParserCategories[getCurrectCategory]"
                    :key="item + '.' + index"
                    :title="item ? item : 'Другое'"
                    @click.stop="handlerClickAtSubcategory(item)"
                    :active="Boolean(menuStore.getCurrectSubcategory === item)">
                </v-list-item>
            </v-fade-transition>
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
                return this.menuStore.getSubcategoriesShow;
            },
            set(flag: boolean){
                this.menuStore.setSubcategoriesShow(this.menuStore, flag);
            }
        },

        getCurrectCategory(){
            if(this.menuStore.getCurrectCategory === 'Другое'){
                return '';
            } else {
                return this.menuStore.getCurrectCategory;
            }
        }
    },
    
    data() {
        return {
            menuStore: useMenuStore(),
            parserProducts: useParserProductsStore(),
        };
    },
    
    methods: {
        handlerClickAtSubcategory(str: string){
            this.menuStore.setCurrectSubcategory(this.menuStore, str);
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>