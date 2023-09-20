<script>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      cadastroRealizado: false,
    };
  },
};
</script>

<template>
  <div class="summary">
    <h1 class="text-3xl font-bold text-blue-900">Finishing up</h1>
    <h3 class="text-gray-400">
      Double-check everything looks OK before confirming
    </h3>
    <div
      class="p-6 mt-3 max-w-sm bg-gray-100 rounded-xl shadow-lg flex flex-col"
    >
      <div class="flex justify-between">
        <span class="text-blue-900 font-bold mt-5">Arcade (Monthly)</span>
        <span class="text-blue-900 font-bold mt-5">$9/mo</span>
      </div>
      <span class="text-blue-900 underline mt-3 mb-4">Change</span>
      <hr />
      <div class="flex justify-between">
        <span class="text-gray-400 mt-5">Online service</span>
        <span class="text-blue-900 font-bold mt-5">+$1/mo</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400 mt-5">Larger storage</span>
        <span class="text-blue-900 font-bold mt-5">+$2/mo</span>
      </div>
    </div>

    <div>
      <nav class="mt-4 flex justify-between">
        <RouterLink
          to="/add-on"
          class="inline-block font-bold bg-white text-gray-500 py-2 px-4 rounded-xl hover:bg-white hover:text-blue-900"
        >
          Go Back
        </RouterLink>
        <button
          type="submit"
          class="inline-block font-bold bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-900"
        >
          Confirm
        </button>
      </nav>
    </div>
    <div v-if="cadastroRealizado">
      <p>Successfully registered!</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.summary h1,
.summary h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .summary h1,
  .summary h3 {
    text-align: left;
  }
}
</style>
