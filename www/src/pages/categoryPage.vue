<template>

</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            parserProducts: useParserProductsStore(),
        };
    },
    
    methods: {
        async handlerCreatedElement(){
            let currectCategory = this.getCurrectCategoryFromURL();
            if(this.parserProducts.getParserCategories[<string> currectCategory]?.length){
                
            }
        },

        getCurrectCategoryFromURL(){
            let params = new URLSearchParams(String(window.location.href.split('?')[1]));
            if(params.get('category')){
                return decodeURI(<string> params.get('category'));
            } else {
                this.$router.replace('/');
            }
        }
    },
    
    components: {
        
    },

    async created(){
       await this.handlerCreatedElement();
    }
});
</script>
    
<style scoped lang='scss'>
</style>