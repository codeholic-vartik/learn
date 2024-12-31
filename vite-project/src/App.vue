<script setup lang="ts">
import { RouterView } from 'vue-router'
import MobileMenu from './components/MobileMenu.vue'
import Header from './components/Header.vue'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
import { useUser } from '@clerk/vue'
import {  watch ,ref} from 'vue'

const { user } = useUser()
const userId = ref<string | null>(null)
watch(() => user.value, (newUser) => {
  if (newUser) {
    userId.value = newUser.id  
    console.log(newUser) 
    console.log(newUser.id)  
  } else {
    console.log('User data is not available yet.')
  }
}, { immediate: true })  
</script>

<template>
  <Header/>

  <RouterView :userId="userId" />

  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>

  <MobileMenu />
</template>

<style scoped>
</style>
