<template>
  <div class="rating-stars">
    <div class="star" v-for="star in +count" :key="star">
      <img src="@/assets/star.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingStars",
  props: {
    count: {
      default: '5',
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.rating-stars {
  display: flex;
  .star {
    margin-right: 4px;
    img {
      width: 14px;
      height: 14px;
    }
  }
}
</style>