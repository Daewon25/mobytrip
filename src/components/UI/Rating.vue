<template>
  <div class="ratings">
    <div class="title">
      <div class="rating">
        <span>{{ rating }}</span>
      </div>
      <div class="text">
        {{ text }}
      </div>
      <div class="count">
        {{ count }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Raiting",
  props: {
    rating: {
      type: String,
      required: false,
      default: '5.0'
    },
    text: {
      type: String,
      required: false,
      default: 'Very good'
    },
    count: {
      type: String,
      required: false,
      default: '1000 ratings'
    }
  }
}
</script>

<style lang="scss">
.ratings {
  margin-top: 50px;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    .rating {
      width: 42px;
      height: 42px;
      background: $primary-blue;
      border-radius: 5px;
      color: #FFFFFF;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      span {
        font-size: 18px;
      }
    }

    .text {
      font-weight: 700;
      font-size: 16px;
      color: $black;
      margin-right: 15px;
    }

    .count {
      font-size: 14px;
      color: $gray;
    }
  }
}
@media only screen and (max-width: 700px) {
  .ratings {
    margin-top: 0px;
    margin-bottom: 18px;
    .title {
      margin-bottom: 15px !important;
      .rating {
        font-size: 12px !important;
      }
    }
  }
}
</style>