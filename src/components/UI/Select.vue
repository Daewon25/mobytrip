<template>
  <div class="select">
    <v-select v-model='vModel' :options="options" :searchable="false">
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
    },
    value: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    vModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  data() {
    return {
      selected: 'USD'
    }
  },
}
</script>

<style lang="scss">
@import 'vue-select/dist/vue-select.css';

.select {
  min-width: 85px;
  margin-right: 40px;
  border: 1px solid transparent;
  transition: all .7s ease;

  &:hover {
    border: 1px solid #FFFFFF;
    border-radius: 8px;
  }
}

.vs__dropdown-menu {
  border: none !important;
  padding: 0 !important;
  min-width: 0 !important;
}

.vs__dropdown-toggle {
  background: rgba(255, 255, 255, 0.15) !important;
  border-radius: 8px;
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