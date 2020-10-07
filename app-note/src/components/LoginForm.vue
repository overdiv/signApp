<template>
  <div>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>로그인</legend>
        <div>
          <label for="username">ID: </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">PW: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <button>로그인</button>
      </fieldset>
    </form>
    <p>
      {{ logMessage }}
    </p>
  </div>
</template>

<script>
import { loginUser } from '@/api';
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.logMessage = `${data.user.username}님 환영합니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
