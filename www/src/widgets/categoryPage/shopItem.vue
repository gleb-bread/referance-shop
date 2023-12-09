<template>
    <v-card
        class="pa-0 h-100 d-flex flex-column"
        color="#FFF">
        <v-card-title  
            :class="{'pa-0': productItem.images?.['img1']}">
            <template v-if="!productItem.images?.['img1']">
                {{ productItem.title }}
            </template>
            <template v-else>
                <v-img 
                    :height="100"
                    :width="'auto'"
                    aspect-ratio="28/1"
                    cover
                    :src="productItem.images?.['img1']">
                </v-img>
            </template>
        </v-card-title>
        <v-card-text
            class="pt-2">
            <h1 class="text-subtitle-1">{{ productItem.title }}</h1>
            <v-list>
                <v-list-item
                    class="pl-0">
                    <v-row>
                        <v-col 
                            class="text-subtitle-1"
                            cols="6">В наличии:</v-col>
                        <v-col 
                            cols="6">{{ productItem.stock }}</v-col>
                    </v-row>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions
            class="d-flex justify-space-between">
            <div>
                <v-btn color="primary">Купить</v-btn>
                <v-btn color="secondary">Подробнее</v-btn>
            </div>
            <div
                class="d-flex align-center justify-end text-end">
                <span
                    class="text-error">
                    {{ Helper.convertMoneyTypeWithoutRuble(String(productItem.price)) + ' руб.'}}
                </span>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import { PropType } from 'vue';
import * as Helper from '@/shared/helpers/helper';
    
export default defineComponent({
    props: {
        productItem: {
            type: Object as PropType<ParserProductsType>,
            required: true,
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            Helper: Helper
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