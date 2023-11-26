<template>
    <div>
        <v-tabs
            v-model:model-value="value"
            color="primary"
            dark
            slider-color="primary">
            <v-tab
                v-for="valueTitle in values"
                :value="valueTitle">
                {{ valueTitle }}
            </v-tab>
        </v-tabs>
    </div>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        
    },
    
    emits: {
        'update:tab': (str: string) => true,
    },
    
    computed: {
        getValue: {
            get(){
                return this.value;
            },

            set(str: string){
                this.$emit('update:tab', str);
            }
        }
    },
    
    data() {
        return {
            value: 'Кофе',

            values: ['Кофе', 'Выпечка'],
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