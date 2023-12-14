<template>
    <v-card
        class="pa-0 h-100 d-flex flex-column"
        color="#FFF">
        <v-card-title  
            :class="{'pa-0': productItem.images?.['img1']}">
            <template v-if="!productItem.images?.['img1']">
                {{ productItem.title }}
            </template>
            <template v-else>
                <v-img 
                    :height="100"
                    :width="'auto'"
                    aspect-ratio="28/1"
                    :cover="productItem.category === 'Напольные покрытия' || productItem.category === 'Плитка и керамогранит'"
                    :src="productItem.images?.['img1']">
                </v-img>
            </template>
        </v-card-title>
        <v-card-text
            class="pt-2">
            <h1 class="text-subtitle-1">{{ productItem.title }}</h1>
            <!-- <v-list>
                <v-list-item
                    class="pl-0">
                    <v-row>
                        <v-col 
                            class="text-subtitle-1"
                            cols="6">В наличии:</v-col>
                        <v-col 
                            cols="6">{{ productItem.stock }}</v-col>
                    </v-row>
                </v-list-item>
            </v-list> -->
        </v-card-text>
        <v-card-actions>
            <div>
                <v-scroll-y-transition>
                    <v-row
                        v-if="showCounter">
                        <v-col>
                            <counter-btn
                                v-model:count-product="defaultCount">
                            </counter-btn>
                        </v-col>
                    </v-row>
                </v-scroll-y-transition>
                <v-row>
                    <v-col cols="4">
                        <v-btn 
                            @click.stop="handlerAddToCart(productItem.id)"
                            color="primary">
                            Купить
                        </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn 
                            color="secondary"
                            :to="`/product/${productItem.id}`">Подробнее</v-btn>
                        </v-col>
                    <v-col 
                        cols="4"
                        class="d-flex align-center">
                        <span
                            class="text-error">
                            {{ Helper.convertMoneyTypeWithoutRuble(String(productItem.price ? productItem.price : 0)) + ' руб.'}}
                        </span>
                    </v-col>
                </v-row>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { ParserProductsType } from '@/app/stores/types';
import { PropType } from 'vue';
import * as Helper from '@/shared/helpers/helper';
import counterBtn from './components/counterBtn.vue';
import { useCartStore } from '@/app/stores/cart';
import { CartAddType } from '@/app/stores/types';
    
export default defineComponent({
    props: {
        productItem: {
            type: Object as PropType<ParserProductsType>,
            required: true,
        },

        answerRequest: {
            type: null as unknown as PropType<null | boolean>,
            required: true,
        },

        textAnswer: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        'update:answerRequest': (flag: boolean) => true,
        'update:textAnswer': (str: string) => true
    },
    
    computed: {
        getAnswerRequest: {
            get(){
                return this.answerRequest;
            },

            set(flag: boolean){
                this.$emit('update:answerRequest', flag);
            }
        },

        getTextAnswer: {
            get(){
                return this.textAnswer;
            },

            set(str: string){
                this.$emit('update:textAnswer', str);
            }
        }
    },
    
    data() {
        return {
            Helper: Helper,

            defaultCount: '0',
            showCounter: false,
            cartStore: useCartStore(),
        };
    },
    
    methods: {
        async handlerAddToCart(idProduct: number){
            if(this.showCounter){
                let productToAdd = {
                    cart_count: Number(this.defaultCount),
                    cart_is_parsing: true,
                    cart_product_id: this.productItem.id
                } as CartAddType;

                let result = await this.cartStore.addProductToCart(this.cartStore, productToAdd);

                if(result){

                } else {
                    this.getAnswerRequest = false;
                    this.getTextAnswer = 'Не удалось добавить товар в корзину';
                }
            }

            this.showCounter = true;
        }
    },
    
    components: {
        counterBtn
    },

});
</script>
    
<style scoped lang='scss'>
</style>