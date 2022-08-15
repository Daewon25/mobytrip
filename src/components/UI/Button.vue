<template>
  <div>
    <div
        class="button"
        :class="{
          'sm': size === 'sm',
          'xl': size === 'xl',
          'white': color === 'white',
          'blue': color === 'blue'

         }"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: {
      default: 'sm',
      required: false,
      type: String
    },
    title: {
      default: '',
      required: true,
      type: String
    },
    color: {
      default: 'white',
      required: false,
      type: String
    }
  }
}
</script>

<style lang="scss">
.button {
  text-align: center;
  cursor: pointer;
  color: $primary-blue;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all .7s ease;
  &:hover {
    background-color: #C3D7F3;
    color: #FFFFFF;
  }
}

.sm {
  border-radius: 10px;
  padding: 9px 41px;
}
.xl {
  padding: 17px 15px;
  border-radius: 10px;
}
.blue {
  background: $primary-blue;
  color: #FFFFFF;
}
.white {
  background: #FFFFFF;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

</style>