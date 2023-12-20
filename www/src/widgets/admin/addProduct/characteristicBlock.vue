<template>
    <v-fade-transition group>
        <template
            v-for="characteristic, index in getCharacteristicsList"
            :key="index">
            <v-row>
                <characteristic-field
                    v-model:characteris="getCharacteristicsList[index]">
                </characteristic-field>
            </v-row>
        </template>
    </v-fade-transition>
    <v-row
        class="py-3 d-flex justify-center">
        <v-btn 
            icon="mdi-plus"
            @click.stop="handlerAddCharacteristic">
        </v-btn>
    </v-row>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import characteristicField from './characteristicBlock/characteristicField.vue';
    
export default defineComponent({
    props: {
        characteristicsList: {
            type: Object as PropType<Array<{value: string, key: string}>>,
            required: true,
        }
    },
    
    emits: {
        'update:characteristicsList': (obj: Array<{value: string, key: string}>) => true,
    },
    
    computed: {
        getCharacteristicsList: {
            get(){
                return this.characteristicsList.length ? this.characteristicsList : this.currectCharacteristics;
            },

            set(obj: Array<{value: string, key: string}>){
                this.$emit('update:characteristicsList', obj);
            }
        }
    },
    
    data() {
        return {
           currectCharacteristics: [{value: '', key: ''}], 
        };
    },
    
    methods: {
        handlerAddCharacteristic(){
            let copyArr = [...this.getCharacteristicsList];
            copyArr.push({value: '', key: ''});
            this.$emit('update:characteristicsList', copyArr);
        }
    },
    
    components: {
        characteristicField
    },
});
</script>
    
<style scoped lang='scss'>
</style>