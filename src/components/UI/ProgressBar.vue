<template>
  <div>
    <Progress
        :percent="val"
        :format="formatVal"
        line-height="12"
        color="#C3D7F3"
        bg-color="#F8F8F8"
    />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  components: {
    'Progress' : () => import('k-progress')
  },
  props: {
    val: {
      type: String,
      required: false,
      default: '100'
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    formatVal (val) {
      if (val === '80') {
        return '4.2'
      } else if (val === '90') {
        return '4.4'
      } else if (val === '95') {
        return '4.6'
      } else if (val === '80') {
        return '4.2'
      } else if (val === '85') {
        return '4.3'
      }
    }
  }
}
</script>

<style lang="scss">
.k-progress-outer-bg-border {
  border-radius: 4px;
}
.k-progress-text {
  font-weight: 600;
  font-size: 14px;
  color: $black;
}
</style>