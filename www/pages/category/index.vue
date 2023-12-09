<template>
     <template v-if="parsingProducts.getLoading || parsingProducts.getError">
        <div
            class="h-screen w-screen d-flex justify-center"
            :class="{ 'align-center': !parsingProducts.getError }">
            <v-progress-circular
                v-if="parsingProducts.getLoading && !parsingProducts.getError"
                indeterminate
                :size="58"
                :width="8"
                color="primary">
            </v-progress-circular>
            <v-alert
                v-if="parsingProducts.getError"
                max-height="100px"
                type="error"
                rounded="0"
                title="Ошибка"
                text="Произошла ошибка загрузки">
            </v-alert>
        </div>
    </template>
    <template>
        <index-components-shop-container>
        </index-components-shop-container>
    </template>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsFilter } from '~/stores/types';
    
export default defineComponent({
    props: {
        
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            currectTab: '',
            menuStore: useMenuStore(),
            parsingProducts:  useParserProductsStore(),
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },

    created(){
        if(!this.menuStore.getCurrectCategory){
            this.$nuxt.$router.replace({path: '/'});
        }
    }
});
</script>

<script setup lang="ts">

useHead({
  title: 'Каталог',
})

</script>
    
<style scoped lang='scss'>
</style>