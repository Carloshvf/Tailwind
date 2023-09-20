<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const formData = ref({
      name: "",
      email: "",
      phone: "",
    });

    const submitForm = () => {
      console.log("Dados do formulário:", formData.value);
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>

<template>
  <div class="info">
    <h1 className="text-3xl font-bold text-blue-900">Personal Info</h1>
    <h3 class="text-gray-400">
      Please provide your name, email address, and phone number.
    </h3>

    <div class="flex flex-col">
      <label for="nome" class="mt-2 mb-1">Name:</label>
      <input
        id="nome"
        class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
        type="text"
        placeholder="Enter text"
        v-model="formData.name"
        required
      />
    </div>

    <div class="flex flex-col">
      <label for="email" class="mt-2 mb-1">Email Address:</label>
      <input
        id="email"
        class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
        type="email"
        placeholder="Enter text"
        v-model="formData.email"
        required
      />
    </div>

    <div class="flex flex-col">
      <label for="telefone" class="mt-2 mb-1">Phone Number:</label>
      <input
        type="text"
        class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
        id="telefone"
        v-model="formData.phone"
        placeholder="e.g. +1 234 567 890"
        required
      />
    </div>

    <div>
      <nav class="text-right mt-4">
        <RouterLink
          to="/plan"
          class="inline-block font-bold bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-900"
        >
          Next Step
        </RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
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

.info h1,
.info h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .info h1,
  .info h3 {
    text-align: left;
  }
}
</style>
