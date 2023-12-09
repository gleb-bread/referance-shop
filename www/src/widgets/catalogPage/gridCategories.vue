<template>
    <v-virtual-scroll
        class="pa-10"
        :items="StructHelper.chunk<string>(Object.keys(getImageCategories), currectCell.cells)">
        <template #default="{ item }">
            <v-row>
                <v-col
                    :cols="currectCell.size"
                    v-for="categoryKey in item">
                    <category-item
                        @click.stop="$nuxt.$router.replace({path: '/category'})"
                        :category-img="getImageCategories[categoryKey]"
                        :category-title="categoryKey">
                    </category-item>
                </v-col>
            </v-row>
        </template>
    </v-virtual-scroll>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        
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