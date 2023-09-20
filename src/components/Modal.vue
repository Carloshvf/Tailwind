<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50"
    v-if="isVisible"
  >
    <div class="modal-overlay"></div>
    <div
      class="modal-container bg-white w-full sm:w-[500px] mx-auto p-4 rounded-lg shadow-lg"
    >
      <div
        class="modal-content flex-col items-center justify-center text-center"
      >
        <img class="mx-auto my-4" src="icon-thank-you.svg" alt="thank" />
        <h1 class="text-3xl font-bold text-blue-900">Thank You!</h1>
        <p class="text-gray-400 mt-2">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email usat
          support@loremgaming.com.
        </p>
      </div>

      <!-- Modal actions (e.g., close button) -->
      <div class="modal-actions text-right mt-4">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    isVisible: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
