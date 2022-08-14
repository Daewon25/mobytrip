<template>
  <div class="card">
    <div class="image">
      <img :src="require('@/assets/img/'+image)" alt="">
    </div>
    <div class="wrapper">
      <div class="title">
        {{ name }}
        <RatingStars :count="rating"/>
      </div>
      <div class="price">
        {{ price }}
        <div class="period">
          per night
        </div>
      </div>
    </div>
    <div class="wrapper mt">
      <div class="address">
        {{ address }}
      </div>
      <div class="with-taxes">
        {{ priceWithTaxes }}
        <div class="with-taxes-text">
          includes taxes & fees
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "@/components/UI/RatingStars";

export default {
  name: "Card",
  components: {
    RatingStars
  },
  props: {
    image: {
      required: false,
      type: String,
      default: ''
    },
    name: {
      required: false,
      type: String,
      default: ''
    },
    rating: {
      required: false,
      type: String,
      default: ''
    },
    price: {
      required: false,
      type: String,
      default: ''
    },
    address: {
      required: false,
      type: String,
      default: ''
    },
    priceWithTaxes: {
      required: false,
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #FFFFFF;
  border-radius: 12px;
  cursor: pointer;
  transition: .5s ease all;
  &:hover {
    box-shadow: 0 4px 20px rgba(1, 0, 2, 0.3);
  }
  .image {
    overflow: hidden;
  }
  img {
    margin-bottom: 24px;
    border-radius: 12px;
    width: 100%;
  }
}

.wrapper {
  max-width: 295px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px 16px;

  .title {
    font-weight: 600;
    font-size: 16px;
    color: $black;
  }

  .price {
    color: $green;
    font-weight: 800;
    font-size: 22px;
    white-space: nowrap;
  }

  .period {
    font-weight: 500;
    font-size: 12px;
    color: $gray2;
    text-align: right;
  }

  .address {
    font-weight: 500;
    font-size: 12px;
    color: $gray;
  }

  .with-taxes {
    font-weight: 700;
    font-size: 16px;
    text-align: right;
  }

  .with-taxes-text {
    font-weight: 500;
    font-size: 12px;
    white-space: nowrap;
    color: $gray2;
  }
}

.mt {
  margin-top: 12px;
}
</style>