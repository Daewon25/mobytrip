<template>
  <div class="breadcrumbs">
    <div v-for="(item, index) in items" :key="item.id" class="item">
      {{ item.name }} <img src="@/assets/arrow.svg" alt="" v-if="index !== items.length - 1">
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
}
.item {
  color: $gray;
  font-size: 14px;
  cursor: pointer;
  margin-right: 13px;
  display: flex;
  align-items: center;
  transition: all .7s ease;
  img {
    margin-left: 14px;
  }
  &:hover {
    color: $primary-blue;
  }
  &:last-child {
    color: $primary-blue;
  }
}
</style>