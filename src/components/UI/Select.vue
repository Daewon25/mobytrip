<template>
  <div class="select" v-click-outside="hide">
    <v-select v-model='selected' :options="options" :searchable="false">
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"><img src="@/assets/arrow_down_select.svg" alt=""></span>
      </template>
    </v-select>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: "Select",
  directives: {
    ClickOutside
  },
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
  },
  methods: {
    hide() {
      this.$emit("close");
    }
  }
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