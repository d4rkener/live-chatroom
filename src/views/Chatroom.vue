<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatroom />
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import NewChatroom from '../components/NewChatroom'
import ChatWindow from '../components/ChatWindow'

export default {
  name: 'Chatroom',
  components: { Navbar, NewChatroom, ChatWindow },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  },
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>