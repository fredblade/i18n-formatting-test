<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <p>{{ $n(10000, 'currency') }}</p>
  <p>{{ $n(10000, 'currency', 'ja-JP') }}</p>
  <p>{{ $n(10000, 'currency', 'ja-JP', { useGrouping: false }) }}</p>
  <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>
  <p>{{ $n(0.99123, 'percent') }}</p>
  <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>
  <p>{{ $n(12.11612345, 'decimal') }}</p>
  <p>{{ $n(12145281111, 'decimal', 'ja-JP') }}</p>
</template>

<script>
// import { useI18n } from 'vue-i18n';
import HelloWorld from "./components/HelloWorld.vue";

// const { n } = useI18n();

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      // n: useI18n(),
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
