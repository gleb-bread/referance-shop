<template>
    <v-col>
        <v-text-field
            v-model:model-value="getCharacteristicsKey"
            variant="underlined"
            :label="'Название характеристики'">
        </v-text-field>
    </v-col>
    <v-col>
        <v-text-field
            v-model:model-value="getCharacteristicsValue"
            variant="underlined"
            :label="'Значение характеристики'">
        </v-text-field>
    </v-col>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        characteris: {
            type: Object as PropType<{value: string, key: string}>,
            required: true,
        }
    },
    
    emits: {
        'update:characteris': (obj: {value: string, key: string}) => true,
    },
    
    computed: {
        getCharacteristicsKey: {
            get(){
                return this.characteris.key;
            },

            set(str: string){
                let copyObj = {...this.characteris};
                copyObj.key = str;
                this.$emit('update:characteris', copyObj);
            }
        },

        getCharacteristicsValue: {
            get(){
                return this.characteris.value;
            },

            set(str: string){
                let copyObj = {...this.characteris};
                copyObj.value = str;
                this.$emit('update:characteris', copyObj);
            }
        }
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