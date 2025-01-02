<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const msg = ref('');

// Function to fetch data
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/hello", {
      withCredentials: true, // Includes cookies in the request
    });
    
    // Assign the message from the response to msg.value
    msg.value = response.data.message;
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the function
fetchData();
</script>

<template>
  <h1>Home View</h1>
  <p>{{ msg }}</p> <!-- Display the message -->
</template>
