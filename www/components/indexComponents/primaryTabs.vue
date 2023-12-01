<template>
    <v-lazy
        class="w-100">
        <div class="mt-10 w-100">
            <v-tabs-img
                v-model:model-value="value"
                color="primary"
                align-tabs="center"
                slider-color="primary">
                <v-tab
                    v-for="valueTitle in values"
                    :value="valueTitle.title"
                    class="h-100 d-flex flex-column">
                    <div>
                        <v-row>
                            <v-col>
                                <v-lazy>
                                    <div>
                                        <img 
                                            :class="{'active-category-shop': value === valueTitle.title}"
                                            :src="valueTitle.img" alt="">
                                    </div>
                                </v-lazy>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-lazy>
                                    <div 
                                        class="text-buity-title">
                                        {{ valueTitle.title }}
                                    </div>
                                </v-lazy>
                            </v-col>
                        </v-row>
                    </div>
                </v-tab>
            </v-tabs-img>
        </div>
    </v-lazy>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
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
.active-category-shop{
    filter:invert(50%) sepia(63%) saturate(2526%) hue-rotate(352deg) brightness(103%) contrast(95%);
}
</style>