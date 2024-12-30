<script setup>
import { ref, onMounted } from 'vue';
import MobileMenu from './components/MobileMenu.vue';

const currentTabUrl = ref(''); // Declare a ref to store the URL

// Fetch the current tab URL on mount
onMounted(() => {
  // Initial fetch of the tab URL
  fetchCurrentTabUrl();

  // Listen for changes in storage to update the tab URL
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.currentTabUrl) {
      currentTabUrl.value = changes.currentTabUrl.newValue;
    }
  });
});

// Function to fetch the current tab URL
const fetchCurrentTabUrl = () => {
  chrome.storage.local.get('currentTabUrl', function (data) {
    if (data.currentTabUrl) {
      currentTabUrl.value = data.currentTabUrl;  // Update the ref with the fetched URL
    }
  });
};
</script>

<template>
  <header className="text-3xl font-bold underline text-red-500 ">
    <h1>Current Tab URL: {{ currentTabUrl }}</h1>
  </header>
  <main>
    <RouterView />
  </main>
  <MobileMenu ref="mobileMenu" />
</template>


