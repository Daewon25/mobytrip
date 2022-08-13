<template>
  <div
      class="badge"
      :class="{'white': background, 'outlined': outlined}"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    title: {
      required: true,
      default: '',
      type: String
    },
    background: Boolean,
    outlined: Boolean
  }
}
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  border-radius: 4px;
  padding: 1px 8px;
  color: $gray1;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all .7s ease;
  &:hover {
    color: $primary-blue;
  }
}

.white {
  background: $blue3;
}

.outlined {
  border: 1px solid $light-blue;
  font-size: 10px;
  color: gray;
  font-weight: 500;
}
</style>