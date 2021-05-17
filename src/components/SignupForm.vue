<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  name: 'SignupForm',
  setup(props, context) {
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signUp } = useSignup()

    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error }
  },
}
</script>

<style>
</style>