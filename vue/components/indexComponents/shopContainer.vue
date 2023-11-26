<template>
    
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        currectTab: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            values: [
                {
                    img: 'https://drive.google.com/uc?export=view&id=1txxr0YFoCnjr9nmpxpRFMCGiL2FtrBO9',
                    title: 'Кофе'
                }, 
                {
                    img: 'https://drive.google.com/uc?export=view&id=1E0Nbjj4lkc7bYkIUrDotkIPei03vfUFy',
                    title:'Выпечка'
                }
            ],
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