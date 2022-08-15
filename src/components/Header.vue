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
      <Slide right :closeOnNavigation="true" >
        <a id="home" href="#">
          <span>Home</span>
        </a>
        <a id="about" href="#">
          <span>About</span>
        </a>
        <a id="find" href="#">
          <span>Find</span>
        </a>
        <a id="Policy" href="#">
          <span>Policy</span>
        </a>
      </Slide>
    </div>
  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: "Header",
  components: {
    'Button': () => import('@/components/UI/Button'),
    'Select': () => import('@/components/UI/Select'),
    Slide
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
  .bm-burger-button {
    top: 23px;
    right: 20px !important;
  }
  .bm-burger-bars {
    background-color: #FFFFFF !important;
  }
  .bm-menu {
    background: $light-blue;
  }
  .bm-item-list {
    span {
      color: $gray;
    }
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