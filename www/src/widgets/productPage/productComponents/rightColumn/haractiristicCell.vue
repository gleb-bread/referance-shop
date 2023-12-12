<template>
    <v-list-item
        width="auto"
        height="auto">
        <v-row>
            <v-col>
                {{ nameHaractiristic }}
            </v-col>
            <v-col>
                {{ valueHaractiristic }}
            </v-col>
        </v-row>
    </v-list-item>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        nameHaractiristic: {
            type: String as PropType<string | number>,
            required: true
        },
        valueHaractiristic: {
            type: String,
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
</style>