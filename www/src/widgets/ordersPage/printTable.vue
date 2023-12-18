<template>
    <v-table
        class="print-table-order">
        <thead>
            <th v-for="title in titleTable">{{ title }}</th>
        </thead>
        <tbody>
            <tr
                v-for="item in orderItem.products"
                :sum="handlerAddSum(item.count_cart *  Helper.getZeroIfNumNotExist(item.price))">
                    <td>{{ item.title }}</td>
                    <td>{{ item.count_cart }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.count_cart *  Helper.getZeroIfNumNotExist(item.price) }}</td>
            </tr>
            <tr>
                <td>Итого</td> 
                <td></td> 
                <td></td> 
                <td>{{ sumOrder }}</td> 
            </tr>
        </tbody>
    </v-table>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { OrderType, CartProductItem } from '@/app/stores/types';
import * as Helper from '@/shared/helpers/helper';
    
export default defineComponent({
    props: {
        orderItem: {
            type: Object as PropType<OrderType>,
            required: true,
        }
           
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            titleTable: [
                'Наименование',
                'Цена',
                'Количество',
                'Сумма'
            ],

            sumOrder: 0,
            Helper: Helper,
        };
    },
    
    methods: {
        handlerAddSum(price: number){
            this.sumOrder += price;
        }
    },
    
    components: {
        
    },
});
</script>
    
<style lang='scss'>
.print-table-order {
    visibility: none;
    display: none;
}

@media print {
    * {
        visibility: none;
    }

    .print-table-order {
        visibility: visible;
        display: block;
    }
}
</style>