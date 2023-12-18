<template>
    <v-card>
        <v-card-title primary-title>
            Заказ №{{ orderItem.order_id }}
        </v-card-title>
        <v-card-text>
            Cумма: {{ orderItem.order_price_view }}
        </v-card-text>
        <v-card-actions>
            <div class="d-flex">
                <v-btn 
                    @click.stop="generateCSV"
                    icon="mdi-table-arrow-down">
                </v-btn>
                <!-- <v-btn icon="mdi-file-download"
                    @click.stop="handlerClickPrint">
                </v-btn> -->
            </div>
        </v-card-actions>
    </v-card>
    <!-- <print-table
        :order-item="orderItem">
    </print-table> -->
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { OrderType, CartProductItem } from '@/app/stores/types';
import * as Helper from '@/shared/helpers/helper';
import printTable from './printTable.vue';
    
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
            titleToCSVTable: [
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
        generateCSV() {
            this.sumOrder = 0;
            let csvContent = 'data:text/csv;charset=utf-8,';
            csvContent += this.titleToCSVTable.join(',') + '\r\n';
            this.orderItem.products.forEach((product) => {
                const csvRow = this.generateListToCSV(product).join(',');
                csvContent += csvRow + '\r\n';
            });
            csvContent += this.generateFooterSCV().join(',') + '\r\n';

            // Create a temporary anchor element to download the CSV file
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'data.csv');
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Clean up
            document.body.removeChild(link);
        },

        generateListToCSV(obj: CartProductItem){
            let arr = [];

            arr.push(obj.title);
            arr.push(obj.price);
            arr.push(obj.count_cart);
            arr.push(Helper.getOneIfNumNotExist(obj.count_cart) * Helper.getZeroIfNumNotExist(obj.price));

            this.sumOrder = this.sumOrder + (Helper.getOneIfNumNotExist(obj.count_cart) * Helper.getZeroIfNumNotExist(obj.price));
            console.log(this.sumOrder);
        
            return arr;
        },

        generateFooterSCV(){
            let arr = [];

            console.log(this.sumOrder);

            arr.push('Итого');
            arr.push('');
            arr.push('');
            arr.push(this.sumOrder);
        
            return arr;
        },

        handlerClickPrint(){
            window.print();
        }
    },
    
    components: {
        printTable
    },
});
</script>
    
<style scoped lang='scss'>
</style>