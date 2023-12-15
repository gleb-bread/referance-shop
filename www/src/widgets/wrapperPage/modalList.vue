<template>
    <div class="modal-wrapper">
      <template v-for="(request, index) in requestResponseArray">
        <modal-window :is-request="request" :is-text="requestResponseText[index]">
        </modal-window>
      </template>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import modalWindow from "./modalWindow.vue";
  import { PropType } from "vue";
  
  export default defineComponent({
    data() {
      return {
        requestResponseArray: [] as boolean[],
        requestResponseText: [] as string[],
      };
    },
    props: {
      responseRequest: {
        type: null as unknown as PropType<null | boolean>,
        required: true,
      },
      textAnswer: {
        type: String as () => string,
        required: true,
      },
    },
  
    emits: {
      "request-delete": (flag: boolean) => true,
      "restore-request": (flag: boolean) => true,
    },
  
    computed: {
      responseRequests() {
        return [
          this.requestResponseArray[0],
          this.requestResponseArray[1],
          this.requestResponseArray[2],
          this.requestResponseArray[3],
          this.requestResponseArray[4],
        ];
      },
    },
  
    components: {
      "modal-window": modalWindow,
    },
  
    methods: {
      handlerHideElement() {
        this.requestResponseArray.shift();
        this.requestResponseText.shift();
        this.$emit("request-delete", true);
      },
    },
  
    watch: {
      responseRequest: function (newVal: boolean) {
        if (newVal != null) {
          this.requestResponseArray.push(newVal);
          this.$emit("restore-request", true);
        }
      },
      textAnswer: function (newVal: string) {
        if (newVal) {
          this.requestResponseText.push(newVal);
        }
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .modal-wrapper {
    z-index: 11;
    max-width: 300px;
    min-width: 200px;
    position: fixed;
    bottom: 10px;
    left: 10px;
  }
  </style>
  