<script setup>
import { ref, onMounted } from 'vue';

const currentTabUrl = ref('');
const visitedUrls = ref([]);

// Fetch data from Chrome storage
const fetchUrls = () => {
  chrome.storage.local.get(['currentTabUrl', 'visitedUrls'], (data) => {
    if (data.currentTabUrl) {
      currentTabUrl.value = data.currentTabUrl;
    }
    if (data.visitedUrls) {
      visitedUrls.value = data.visitedUrls;
    }
  });
};

// Watch for changes in Chrome storage
onMounted(() => {
  fetchUrls();

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
      if (changes.currentTabUrl) {
        currentTabUrl.value = changes.currentTabUrl.newValue;
      }
      if (changes.visitedUrls) {
        visitedUrls.value = changes.visitedUrls.newValue;
      }
    }
  });
});
</script>

<template>
  <div>
    <header>
      <h1>Current Tab URL:</h1>
      <p>{{ currentTabUrl }}</p>
    </header>
    <main>
      <h2>Visited URLs:</h2>
      <ul>
        <li v-for="(url, index) in visitedUrls" :key="index">{{ url }}</li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
header, main {
  font-family: Arial, sans-serif;
  margin: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 0;
  word-wrap: break-word;
}
</style>
