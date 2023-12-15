<template>
    <v-col
        v-if="productImages"
        class="max-w-50">
        <v-img
            width="auto"
            cover
            :src="productImages['img1']">
        </v-img>
    </v-col>
    <v-col>
        <v-row>
            <v-col
                class="pa-0 pt-1">
                Количество: {{ countCart }} 
            </v-col>
        </v-row>
        <v-row>
            <v-col
                class="pa-0 pt-1">
                Сумма: {{ Helper.convertMoneyType(String(countCart * (productPrice ? productPrice : 0))) }} 
            </v-col>
        </v-row>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import * as Helper from '@/shared/helpers/helper';
    
export default defineComponent({
    props: {
        productImages: {
            type: null as unknown as PropType<null | {[key: string]: string}>,
            required: true,
        },

        countCart: {
            type: Number,
            required: true,
        },

        productPrice: {
            type: null as unknown as PropType<null | number>,
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
.max-w-50{
    max-width: 50px;
}

</style>