<template>
  <div id="app">
    <AppHeader />
    <div class="wrap-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import 'assets/scss/app';
</style>
