<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
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
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">

</style>
