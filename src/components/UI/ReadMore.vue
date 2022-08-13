<template>
  <div>
    <p>
      {{ formattedBody }}
    </p>
    <div class="read-more-btn" @click="showingFullText = !showingFullText">
      {{ getButtonText }} <img src="@/assets/arrow_down.svg" alt="" :class="{'arrow-up': showingFullText}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      default: '',
      required: false
    },
    limit: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: '',
      required: false
    },
    withText: Boolean
  },
  data() {
    return {
      showingFullText: false,
    };
  },

  computed: {
    getButtonText() {
      if (this.withText && this.buttonText) {
        return this.buttonText
      }
      return `Read ${this.showingFullText ? "Less" : "More"} `
    },
    formattedBody() {
      if (this.showingFullText) {
        return this.body;
      }

      return `${this.body.slice(0, +this.limit).trim()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.read-more-btn {
  align-items: center;
  color: $primary-blue;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  display: inline-block;

  img {
    margin-left: 10px;
  }

  .arrow-up {
    transform: rotate(180deg);
  }
}
</style>
