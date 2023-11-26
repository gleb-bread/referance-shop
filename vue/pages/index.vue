<template>
    <v-container class="h-100-vh w-100-vw">
        <index-components-primary-tabs
          @update:tab="currectTab = $event">
        </index-components-primary-tabs>
        <index-components-shop-container
          :currect-tab="currectTab">
        </index-components-shop-container>
    </v-container>
</template>

<script lang='ts'>
  
import { defineComponent } from 'vue';
import { PropType } from 'vue';
  
export default defineComponent({
  props: {
    
  },
  
  emits: {
    
  },
  
  computed: {
    
  },
  
  data() {
    return {
      currectTab: '',
    };
  },
  
  methods: {
    
  },
  
  components: {

  },
});
</script>

<script setup lang="ts">
useHead({
  title: 'Главная страница',
})
</script>
  
<style scoped lang='scss'>
.h-100-vh {
  height: 100vh;
}

.w-100-vw{
  width: 100vw;
}
</style>