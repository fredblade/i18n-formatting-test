<template>
  <router-link :to="{ name: 'Home' }">Home</router-link> |
  <router-link :to="{ name: 'About' }">About</router-link>
  <br>
  <img alt="Vue logo" src="../assets/logo.png" />


  <h1>FORMATTING TEST</h1>
<!--  <HelloWorld msg="Welcome to Your Vue.js App" />-->

  <p>Number formatting</p>



  <div class="flex-container">
    <div>
      <p>JP</p>
      <p>{{ $n(12141, 'currency', 'ja-JP') }}</p>
      <p>{{ $n(12141, 'currency', 'ja-JP', { useGrouping: false }) }}</p>
    </div>
    <div>
      <p>US</p>
      <p>{{ $n(12141, 'currency', 'en-US') }}</p>
      <p>{{ $n(12141, 'decimal', 'en-US') }}</p>
      <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>
    </div>
<!--    <div>-->
<!--      <p>Custom formatting (ex. space after 3 0's)</p>-->
<!--      <p>{{ $n(12145281111.2345678, 'decimal', 'en-CA') }}</p>-->
<!--      <p>{{ $n(10000, 'currency') }}</p>-->
<!--      <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>-->
<!--    </div>-->
    <div>
      <p>France</p>
      <p>{{ $n(12141, 'currency', 'fr') }}</p>
    </div>
    <div>
      <p>{{ $n(0.99123, 'percent') }}</p>
      <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>

    </div>

  </div>
</template>

<script>
export default {
  name: "Home ",
  components: {
  },
  data() {
    return {
      neee: 2321,
    }
  },
  methods: {
    test: function() {
      return null
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  /*align-items: center;*/
}

.flex-container > div {
  background-color: #f1f1f1;
  /*width: 100px;*/
  margin: 10px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  line-height: 75px;
  font-size: 23px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
