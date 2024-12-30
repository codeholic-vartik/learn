<template>
    <div :class="['mobile-bottom-menu', { 'active': isActive }]" class="fixed bottom-0 left-0 right-0 text-white shadow-lg">
      <!-- Menu Tabs -->
      <div class="menu-tabs flex justify-around items-center p-2 bg-gray-700">
        <RouterLink
          to="/"
          class="menu-tab flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          @click="changeTab('home')"
          :class="{ 'text-yellow-400': activeTab === 'home' }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7 0 11-18 0z" />
          </svg>
          <span class="text-sm">Home</span>
        </RouterLink>
        
        <RouterLink
          to="/about"
          class="menu-tab flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          @click="changeTab('about')"
          :class="{ 'text-yellow-400': activeTab === 'about' }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-sm">About</span>
        </RouterLink>
  
        <RouterLink
          to="/contact"
          class="menu-tab flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          @click="changeTab('contact')"
          :class="{ 'text-yellow-400': activeTab === 'contact' }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10l-2 2m0 0l-2-2m2 2V5a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-7" />
          </svg>
          <span class="text-sm">Contact</span>
        </RouterLink>
      </div>
  
    
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'MobileBottomMenu',
    setup() {
      const isActive = ref(true); // Menu visibility state
      const activeTab = ref('home'); // Default active tab
      const route = useRoute(); // Vue Router hook
  
      // Change the active tab
      const changeTab = (tab) => {
        activeTab.value = tab;
      };
  
      // Watch for route changes and update the active tab
      watch(
        () => route.path,
        (newPath) => {
          if (newPath === '/') {
            activeTab.value = 'home';
          } else if (newPath === '/about') {
            activeTab.value = 'about';
          } else if (newPath === '/contact') {
            activeTab.value = 'contact';
          }
        },
        { immediate: true }
      );
  
      return {
        isActive,
        activeTab,
        changeTab
      };
    }
  };
  </script>
  
  <style scoped>
  /* Bottom menu styles */
  .mobile-bottom-menu {
    @apply fixed bottom-0 left-0 right-0 bg-gray-800 text-white shadow-lg;
  }
  
  .menu-tabs {
    @apply flex justify-around items-center p-2 bg-gray-700;
  }
  
  .menu-tab {
    @apply flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300;
  }
  
  .menu-content {
    @apply p-4 bg-gray-900;
  }
  
  .menu-tab svg {
    @apply h-6 w-6 mb-1;
  }
  
  .menu-tab span {
    @apply text-sm;
  }
  </style>
  