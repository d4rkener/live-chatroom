<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
  name: 'Navbar',
  setup() {
    const { error, logout } = useLogout()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return { handleClick }
  },
}
</script>

<style>
</style>