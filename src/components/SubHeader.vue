<template>
  <div class="sub-header">
   <div class="wrapper">
     <div class="icon">
       <img src="@/assets/arrow_left.svg" alt="arrow-left">
     </div>
     <div class="text">
       See all hotels in Austin
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "SubHeader"
}
</script>

<style lang="scss" scoped>
.sub-header {
  padding: 0 100px;
  background: $light-blue;
  display: flex;
  align-items: center;
  color: $black;
  min-height: 50px;
  margin-bottom: 12px;
  .wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon {
      display: flex;
      margin-right: 13px;
    }
    .text {
      font-size: 16px;
      font-weight: 500;
      transition: all .7s ease;
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: $black;
      }
    }
  }
}
</style>