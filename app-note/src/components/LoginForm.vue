<template>
  <div>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend class="sr-only">로그인</legend>
        <div>
          <label for="username">ID: </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">PW: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <button :disabled="!isUsernameValid || !password">로그인</button>
      </fieldset>
    </form>
    <p>
      {{ logMessage }}
    </p>
  </div>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data);
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.user.username);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data;
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
