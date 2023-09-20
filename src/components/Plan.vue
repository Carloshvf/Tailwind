<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
  },
};
</script>

<template>
  <div class="plan">
    <h1 class="text-3xl font-bold text-blue-900">Select your plan</h1>
    <h3 class="text-gray-400">
      You have the option of monthly or yearly billing.
    </h3>
    <div class="flex space-x-4">
      <div class="p-6 max-w-sm bg-white rounded-xl shadow-lg flex flex-col">
        <img class="h-12 w-12 mr-2" src="icon-arcade.svg" alt="Arcade" />
        <span class="text-blue-900 font-bold mt-5">Arcade</span>
        <span class="text-gray-400 font-bold mt-5">$9/mo</span>
      </div>

      <div class="p-6 max-w-sm bg-white rounded-xl shadow-lg flex flex-col">
        <img class="h-12 w-12 mr-2" src="icon-advanced.svg" alt="Advanced" />
        <span class="text-blue-900 font-bold mt-5">Advanced</span>
        <span class="text-gray-400 font-bold mt-5">$12/mo</span>
      </div>

      <div class="p-6 max-w-sm bg-white rounded-xl shadow-lg flex flex-col">
        <img class="h-12 w-12 mr-2" src="icon-pro.svg" alt="Pro" />
        <span class="text-blue-900 font-bold mt-5">Pro</span>
        <span class="text-gray-400 font-bold mt-5">$15/mo</span>
      </div>
    </div>

    <div class="mt-4 bg-gray-200 rounded-lg p-4">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-900 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Yearly</span
        >
      </label>
    </div>

    <div>
      <nav class="mt-4 flex justify-between">
        <RouterLink
          to="/"
          class="inline-block font-bold bg-white text-gray-500 py-2 px-4 rounded-xl hover:bg-white hover:text-blue-900"
        >
          Go Back
        </RouterLink>
        <RouterLink
          to="/add-on"
          class="inline-block font-bold bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-900"
        >
          Next Step
        </RouterLink>
      </nav>
    </div>
  </div>
  <router-view />
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

.plan h1,
.plan h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .plan h1,
  .plan h3 {
    text-align: left;
  }
}
</style>
