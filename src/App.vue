<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>

export default {
  name: 'HomeView',
  components: {
    'Header': () => import('@/components/Header'),
    'Footer': () => import('@/components/Footer'),
  },
  methods: {
    isMobile() {
      return screen.width <= 700;
    }
  },
  created() {
    if (this.isMobile()) {
      this.$router.push('/mobile');
    }
    else {
      this.$router.push('/desktop');
    }
  },
}
</script>
<style lang="scss">

</style>
