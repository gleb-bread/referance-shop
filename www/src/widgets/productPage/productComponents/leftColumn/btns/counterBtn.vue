<template>
    <v-col>
        <div
            class="d-flex">
            <v-btn
                color="primary"
                :variant="'text'">
                +
            </v-btn>
            <v-text-field
                class="mx-width-150"
                :variant="'underlined'">
            </v-text-field>
            <v-btn
                color="primary"
                :variant="'text'">
                -
            </v-btn>
        </div>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
    
export default defineComponent({
    
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
.mx-width-150{
    max-width: 150px;
}
</style>