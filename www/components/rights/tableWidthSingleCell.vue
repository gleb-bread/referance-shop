<template>
    <v-table
        class="mr-2 rounded min-w-300px"
        height="100%">
        <thead>
            <th
                class="pt-2">
                {{ titleCell }}
            </th>
        </thead>
        <tbody>
            <template
                v-for="item in valuesList">
                <tr>
                    <td>
                        {{ keyValue ? item[<string> keyValue] : item }}
                    </td>
                </tr>
            </template>
            <td
                class="pa-5 d-flex justify-center">
                <v-btn 
                    icon="mdi-plus"
                    size="30">
                </v-btn>
            </td>
        </tbody>
    </v-table>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        titleCell: {
            type: String,
            required: true,
        },

        valuesList: {
            type: Array as unknown as PropType<Array<any> | any>,
            required: true,
        },

        keyValue: {
            type: String as unknown as PropType<string | false>,
            default: false,
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
.min-w-300px{
    min-width: 300px;
}
</style>