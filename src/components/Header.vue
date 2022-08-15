<template>
  <header>
    <div class="logo">
      <img src="@/assets/mobytrip.svg" alt="moby-trip-logo"/>
    </div>
    <div class="wrapper">
      <div class="currency">
        <Select :options="options" v-model="selectedCurrency"/>
      </div>
      <div class="login-button">
        <Button title="Login" white/>
      </div>
    </div>
    <div class="hamburger">
      <img src="@/assets/hamburger.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    'Button': () => import('@/components/UI/Button'),
    'Select': () => import('@/components/UI/Select'),
  },
  data() {
    return {
      options: ['USD', 'UAH'],
      selectedCurrency: 'UAH'
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: $primary-blue;
  padding: 29px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .login-button {
    transition: all .7s ease;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
  }
  .hamburger {
    display: none;
  }
}
@media only screen and (max-width: 700px) {
  header {
    padding: 20px 16px;
    .wrapper {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
}
</style>