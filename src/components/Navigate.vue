<template>
  <div class="step rounded-xl">
    <ul style="list-style: none">
      <li v-for="(name, index) in names" :key="index" class="step-item">
        <span class="circle">{{ index + 1 }}</span> STEP {{ index + 1 }}
        <span>
          {{ name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const names = ref(["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]);

    return { names };
  },
};
</script>

<style scoped>
.circle {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-color: #3490dc; /* Circle background color */
  color: white;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 8px;
}
.step {
  /* Set your background image URL */
  background-image: url("/bg-sidebar-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
  width: 300px;
}
.step-item {
  padding: 20px;
  margin: 10px 0;
  height: 100px;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.step-item span {
  font-weight: bold;
}

@media (width: 400px), (height: 876px) {
}
</style>
