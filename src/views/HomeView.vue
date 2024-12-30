<template>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>
    
    <div v-if="products.length > 0" class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.thumbnail" alt="Product Image" class="product-image" />
        <div class="product-info">
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">${{ product.price }}</p>
          <p class="product-rating">Rating: {{ product.rating }} / 5</p>
          <div class="product-reviews">
            <h3>Reviews:</h3>
            <ul>
              <li v-for="review in product.reviews" :key="review.date">
                <strong>{{ review.reviewerName }}:</strong> {{ review.comment }} ({{ review.rating }} stars)
              </li>
            </ul>
          </div>
          <p class="product-availability">Stock: {{ product.stock }} - {{ product.availabilityStatus }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State variables
const products = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch data from the API
const fetchData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    products.value = response.data.products; // Store the fetched products
    loading.value = false;
  } catch (err) {
    error.value = err.message; // Handle error
    loading.value = false;
  }
};

// Call fetchData when the component is mounted
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* General Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 20px;
}

/* Product List */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
}

.product-rating {
  font-size: 1rem;
  margin-bottom: 10px;
}

.product-reviews h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.product-reviews ul {
  list-style: none;
}

.product-reviews li {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.product-availability {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: bold;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
