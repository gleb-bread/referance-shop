<template>
    <v-card
        v-if="categoryTitle && categoryImg"
        @click.stop="handlerClickCategory(categoryTitle)"
        class="pa-0 h-100 d-flex flex-column">
        <v-card-title  
            :class="{'pa-0': categoryImg}">
            <template v-if="!categoryImg">
                {{ categoryTitle }}
            </template>
            <template v-else>
                <v-img 
                    :height="250"
                    :width="'auto'"
                    cover
                    aspect-ratio="28/1"
                    :src="categoryImg">
                </v-img>
            </template>
        </v-card-title>
        <v-card-text
            class="pt-2">
            <h2 class="pt-10 text-h5 d-block text-center font-weight-medium h-100 w-100">
                {{ categoryTitle ? categoryTitle : 'Другое' }}
            </h2>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsFilter } from '@/app/stores/types';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    props: {
        categoryImg: {
            type: null as unknown as PropType<null | string>,
            required: true,
        },

        categoryTitle: {
            type: null as unknown as PropType<null | string>,
            required: true,
        }
    },
    
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
        handlerClickCategory(category: string){

        },
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
</style>