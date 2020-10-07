<template>
  <div>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>회원가입 페이지</legend>
        <div>
          <label for="username">id: </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <button>회원 가입</button>
      </fieldset>
    </form>
    <p>
      {{ logMessage }}
    </p>
  </div>
</template>

<script>
import { registerUser } from '@/api';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('post');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
