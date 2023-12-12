<template>
    <v-col>
        <span class="text-h6">Характиристики</span>
        <v-list>
            <template v-for="haracteristic, key in productItem?.characteristics">
                <haractiristic-cell
                    :name-haractiristic="key"
                    :value-haractiristic="haracteristic">
                </haractiristic-cell>
            </template>
        </v-list>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import haractiristicCell from './rightColumn/haractiristicCell.vue';
    
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
            
        };
    },
    
    methods: {
        
    },
    
    components: {
        haractiristicCell
    },
});
</script>
    
<style scoped lang='scss'>
</style>