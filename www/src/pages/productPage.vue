<template>
    <v-card
        height="calc(100vh - 64px)"
        rounded="none">
        <v-card-text>
            <v-container>
                <h1 class="text-h5 mb-5">{{ getProductInfo?.title }}</h1>
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-lazy
                                    height="300">
                                    <v-img
                                        width="auto"
                                        aspect-ratio="16/9"
                                        :src="getProductInfo?.images?.img1">
                                    </v-img>
                                </v-lazy>
                            </v-col>
                            <v-col>
                                <v-row>
                                    <v-col>
                                        <div
                                            class="border d-flex">
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
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-btn
                                            color="primary"
                                            :variant="'text'">
                                                Купить
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <span class="text-h6">Характиристики</span>
                        <v-list>
                            <template v-for="haracteristic, key in getProductInfo?.characteristics">
                                <v-list-item
                                    width="auto"
                                    height="auto">
                                    <v-row>
                                        <v-col>
                                            {{ key }}
                                        </v-col>
                                        <v-col>
                                            {{ haracteristic }}
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { useParserProductsStore } from '@/app/stores/parserProducts';
    
export default defineComponent({
    
    emits: {
        
    },
    
    computed: {
        getProductInfo(){
            let product = this.parserProductsStore.getParserProducts?.find(item => item.id === <number> Number(this.$route.params.id));
            if(product){
                return product;
            } else {
                return product;
            }
        }
    },
    
    data() {
        return {
            parserProductsStore: useParserProductsStore(),
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