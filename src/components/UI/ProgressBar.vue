<template>
  <div>
    <Progress
        bar-color="#C3D7F3"
        :val="val"
        size="large"
        :bar-border-radius="4"
        :text="text"
        text-align="right"
        text-position="top"
        bg-color="#F8F8F8"
    />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  components: {
    'Progress' : () => import('vue-simple-progress')
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
}
</script>