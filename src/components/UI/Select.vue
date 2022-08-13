<template>
  <div class="select">
    <v-select v-model='selected' :options="options" :searchable="false">
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"><img src="@/assets/arrow_down_select.svg" alt=""></span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: [Array, Object],
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      selected: 'USD'
    }
  }
}
</script>

<style lang="scss">
@import 'vue-select/dist/vue-select.css';
.select {
  min-width: 79px;
  margin-right: 40px;
}
.vs__dropdown-toggle {
  background: rgba(255, 255, 255, 0.15) !important;
  border-radius: 8px;
  width: 79px;
}
.vs__search {
  display: none;
}
.vs__selected {
  color: #FFFFFF !important;
  font-weight: 600;
  font-size: 14px;
}
.vs__clear {
  display: none;
  svg {
    fill: #FFFFFF;
  }
}
</style>