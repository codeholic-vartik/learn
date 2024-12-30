<template>
    <div :class="['mobile-bottom-menu', { 'active': isActive }]">
      <div class="menu-tabs">
        <RouterLink to="/" class="menu-tab" @click="changeTab('home')" :class="{'active': activeTab === 'home'}">Home</RouterLink>
        <RouterLink to="/about" class="menu-tab" @click="changeTab('about')" :class="{'active': activeTab === 'about'}">About</RouterLink>
        <RouterLink to="/contact" class="menu-tab" @click="changeTab('contact')" :class="{'active': activeTab === 'contact'}">Contact</RouterLink>
      </div>
  

    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'MobileBottomMenu',
    setup() {
      const activeTab = ref('home'); // Default active tab
  
      // Function to change the active tab
      const changeTab = (tab) => {
        activeTab.value = tab;
      };
  
      return {
        activeTab,
        changeTab
      };
    }
  }
  </script>
  
  <style scoped>
  .mobile-bottom-menu {
    position: fixed;
    bottom: 20px;
    height: 40px;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    transition: bottom 0.3s ease;
  }
  
  .mobile-bottom-menu.active {
    bottom: 0; /* Slide up when active */
  }
  
  .menu-tabs {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #444;
  }
  
  .menu-tab {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
  }
  
  .menu-tab.active {
    color: #f39c12;
  }
  
  .menu-content {
    padding: 20px;
    background-color: #555;
  }
  
  .menu-content p {
    font-size: 16px;
  }
  </style>
  