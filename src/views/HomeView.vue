<template>
  <div class="home">
    <IndexPage />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/IndexPage'

export default {
  name: 'HomeView',
  components: {
    IndexPage
  }
}
</script>
