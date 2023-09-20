<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const checkData = ref({
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    });

    return {
      checkData,
    };
  },
};
</script>

<template>
  <div class="add">
    <h1 class="text-3xl font-bold text-blue-900">Pick add-ons</h1>
    <h3 class="text-gray-400">Add-ons help enhance your gaming experience</h3>

    <!-- Checkbox for Online Service -->
    <div class="my-4 mt-4 bg-gray-200 rounded-lg p-4">
      <label class="flex items-start space-x-2">
        <input
          type="checkbox"
          v-model="checkData.onlineService"
          class="form-checkbox h-5 w-5 text-blue-600"
        />
        <span class="text-blue-900 font-bold">Online Service</span>
      </label>
      <span class="text-gray-400">Access to multiplayer games</span>
    </div>

    <!-- Checkbox for Larger Storage -->
    <div class="my-4 mt-4 bg-gray-200 rounded-lg p-4">
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          v-model="checkData.largerStorage"
          class="form-checkbox h-5 w-5 text-blue-600"
        />
        <span class="text-blue-900 font-bold">Larger Storage</span>
      </label>
      <span class="text-gray-400">Extra 1TB of cloud save</span>
    </div>

    <!-- Checkbox for Customizable Profile -->
    <div class="my-4 mt-4 bg-gray-200 rounded-lg p-4">
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          v-model="checkData.customizableProfile"
          class="form-checkbox h-5 w-5 text-blue-600"
        />
        <span class="text-blue-900 font-bold">Customizable Profile</span>
      </label>
      <span class="text-gray-400">Custom Theme on your Profile</span>
    </div>

    <div>
      <nav class="mt-4 flex justify-between">
        <RouterLink
          to="/plan"
          class="inline-block font-bold bg-white text-gray-500 py-2 px-4 rounded-xl hover:bg-white hover:text-blue-900"
        >
          Go Back
        </RouterLink>
        <RouterLink
          to="/summary"
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
.custom-checkbox:checked {
  background-color: #3490dc; /* Change the checked background color */
  border-color: #3490dc; /* Change the border color when checked */
  color: #fff; /* Change the text color when checked */
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.add h1,
.add h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .add h1,
  .add h3 {
    text-align: left;
  }
}
</style>
