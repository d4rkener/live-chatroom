<template>
  <form>
    <textarea
      placeholder="Type a message and press enter to send"
      v-model="message"
      @keypress.enter="handleSubmit"
    ></textarea>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'

export default {
  name: 'NewChatroom',
  setup() {
    const { user } = getUser()
    const { addDoc, error } = useCollection('messages')

    const message = ref('')

    const handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp(),
      }

      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
  },
}
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>