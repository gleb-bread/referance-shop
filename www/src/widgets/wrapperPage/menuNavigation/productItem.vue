<template>
    <v-card>
        <v-card-title primary-title>
            {{ productItem.title }}
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col
                    v-if="productItem.images"
                    class="max-w-50">
                    <v-img
                        width="auto"
                        cover
                        :src="productItem.images['img1']">
                    </v-img>
                </v-col>
                <v-col>
                    
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { CartProductItem } from '@/app/stores/types';
    
export default defineComponent({
    props: {
        productItem: {
            type: Object as PropType<CartProductItem>,
            required: true
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            
        };
    },
    
    methods: {
        
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
.max-w-50{
    max-width: 50px;
}
</style>