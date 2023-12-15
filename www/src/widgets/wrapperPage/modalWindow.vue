<template>
    <transition name="fade">
      <v-alert
        class="modal-window mb-2 z-index-1000000"
        v-if="isRequest && visible"
        color="success"
        icon="$success"
        :text="isText"
      >
      </v-alert>
    </transition>
    <transition name="fade">
      <v-alert
        class="modal-window mb-2"
        v-if="!isRequest && visible"
        color="error"
        icon="$error"
        :text="isText"
      >
      </v-alert>
    </transition>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: {
      isRequest: {
        type: Boolean,
        required: true,
      },
      isIndex: {
        type: Number,
        default: 0,
      },
      isTime: {
        type: Number,
        default: 4000,
      },
      isText: {
        type: String,
        default: "",
      },
    },
  
    data() {
      return {
        visible: true,
      };
    },
  
    mounted() {
      setTimeout(() => {
        this.visible = false;
      }, this.isTime);
    },
  });
  </script>
  
  <style scoped>
  .modal-wrapper {
    padding: 10px 7px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 0.3em;
    z-index: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  }
  
  .modal-wrapper.good {
    background: #6ec988;
  }
  
  .modal-wrapper.bad {
    background-color: rgb(186, 19, 19);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Добавьте запятую между свойствами */
    transform: translateY(0); /* Измените translateY на 0 */
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px); /* Установите начальное значение translateY */
  }
  
  .z-index-1000000{
    z-index: 1000000000000000 !important;
  }
  </style>
  