<template>
    <v-card
        @click.stop="handlerClickCategory(categoryTitle)"
        @mouseover.stop="isHover = true"
        @mouseleave.stop="isHover = false"
        class="pa-0 h-100 d-flex flex-column"
        color="#FFF">
        <v-card-title  
            :class="{'pa-0': categoryImg}">
            <template v-if="!categoryImg">
                {{ categoryTitle }}
            </template>
            <template v-else>
                <v-img 
                    :height="250"
                    :width="'auto'"
                    cover
                    aspect-ratio="28/1"
                    :src="categoryImg">
                </v-img>
            </template>
        </v-card-title>
        <v-card-text
            class="pt-2">
            <h2 class="pt-10 text-h5 d-block text-center font-weight-medium h-100 w-100 filter hovering"
                :class="{
                    'text-secondary':  !isHover,
                    'text-primary': isHover
                }">
                {{ categoryTitle ? categoryTitle : 'Другое' }}
            </h2>
        </v-card-text>
    </v-card>
</template>

<script lang='ts'>
    
import { defineComponent } from 'vue';
import { PropType } from 'vue';
    
export default defineComponent({
    props: {
        categoryImg: {
            type: String,
            required: true,
        },

        categoryTitle: {
            type: String,
            required: true,
        }
    },
    
    emits: {
        
    },
    
    computed: {
        
    },
    
    data() {
        return {
            isHover: false,
            menuStore: useMenuStore(),
        };
    },
    
    methods: {
        handlerClickCategory(category: string){
            this.menuStore.setCurrectCategory(this.menuStore, category, true);
        },

        handlerDbClickCategory(category: string){
            this.menuStore.setCurrectCategory(this.menuStore, category, false);
        }
    },
    
    components: {
        
    },
});
</script>
    
<style scoped lang='scss'>
.filter{
    background-color: rgba(255,255,255,.5);
}

.hovering{
    transition-property: all;
    transition-duration: .3s;
}
</style>