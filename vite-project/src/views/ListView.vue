<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed ,watchEffect} from "vue";

const count = ref(0);
const isActive = ref(true);
const author = reactive({
  name: "John Doe",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});

const publishedBooksMessage = computed(() => {
  return author.books.length > 10 ? "Yes" : "No";
});
const now = ref(new Date());

const formattedNow = computed(() => {
  const year = now.value.getFullYear();
  const month = String(now.value.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.value.getDate()).padStart(2, "0");
  const hours = String(now.value.getHours()).padStart(2, "0");
  const minutes = String(now.value.getMinutes()).padStart(2, "0");
  const seconds = String(now.value.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.value.getMilliseconds()).padStart(3, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
});

onMounted(() => {
  const interval = setInterval(() => {
    now.value = new Date(); // Update the current time
  }, 50); // Update every 50ms for smoother display

  onUnmounted(() => {
    clearInterval(interval);
  });
});

const inc = async () => {
  isActive.value = true;

  count.value++;
  isActive.value = false;
};

function greet(e: Event) {
  alert("Hello, " + (e.target as HTMLInputElement).value + "!");

  if (e) {
    alert((e.target as HTMLInputElement).tagName);
  }
}

const message = ref('test msg');

watchEffect(() => {
      console.log(`Message: ${message.value}`);
    });
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-center justify-center align-middle gap-10 mb-40"
  >
    <h1 class="text-3xl font-bold">{{ isActive }}</h1>
    <div>{{ count }}</div>
    <button
      :class="{
        ' bg-red-500 ease-in-out delay-200  text-white rounded w-full border-2 max-w-2xl h-12': isActive,
        ' bg-green-500 ease-in-out delay-200  text-white rounded w-full border-2 max-w-2xl h-12': !isActive,
      }"
      @click="inc"
    >
      +1
    </button>
    <button class="btn" @click="count--">-1</button>

    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ formattedNow }}</p>

    <li v-for="(value, key) in author" :key="key">
      {{ key }}: {{ value }}


      <ul>
        <li v-for="book in author.books" :key="book">{{ book }}</li>
      </ul>
    </li>
    <button @click="greet">Greet</button>


    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </div>
</template>

<style scoped>
.btn {
  @apply px-4 py-2 bg-blue-400 text-white rounded w-full border-2 max-w-2xl;
}
</style>
