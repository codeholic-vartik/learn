<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedTab = ref('Tab 1');

const selectTab = (tab: string) => {
  selectedTab.value = tab;

  if (tab === 'Tab 1') {
    router.push('/'); 
  }  else if (tab === 'Tab 2') {
    router.push('/list');
  }
};
</script>

<template>
  <!-- Bottom Navigation Menu -->
  <div class="fixed bottom-0 left-0 w-full bg-gray-800 p-2 flex justify-around items-center z-50">
    <button
      class="text-white"
      :class="{'text-blue-500': selectedTab === 'Tab 1'}"
      @click="selectTab('Tab 1')"
    >
      Home
    </button>

    <button
      class="text-white"
      :class="{'text-blue-500': selectedTab === 'Tab 2'}"
      @click="selectTab('Tab 2')"
    >
    List
    </button>
  </div>
</template>

<style scoped>
/* Ensures the menu stays fixed at the bottom of the screen */
.fixed {
  position: fixed;
}
.z-50 {
  z-index: 50;
}

button {
  flex-grow: 1;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

/* Active tab style */
.text-blue-500 {
  color: #3b82f6; /* Tailwind blue color */
}
</style>
