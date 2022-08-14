<template>
  <footer>
    <div class="links">
      <div class="link">
        <a href="#">About us</a>
      </div>
      <div class="link">
        <a href="#">Terms and Services</a>
      </div>
      <div class="link">
        <a href="#">Privacy Policy</a>
      </div>
      <div class="link">
        <a href="#">Support</a>
      </div>
    </div>
    <div class="copyrights">
      (c) 2022 mobytrip, All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer {
  background: $blue2;
  padding: 48px 100px;
  display: flex;
  align-items: center;
  .links {
    display: flex;
    .link {
      margin-right: 45px;
      a {
        font-weight: 500;
        font-size: 14px;
        color: $black;
        text-decoration: none;
      }
    }
  }
  .copyrights {
    margin-left: auto;
    font-size: 14px;
  }
}

@media only screen and (max-width: 700px) {
  footer {
    padding: 20px 30px;
    flex-direction: column;
    .links {
      margin-bottom: 20px;
      justify-content: center;
      .link {
        margin-right: 15px;
        text-align: center;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .copyrights {
      margin-left: 0;
    }
  }
}
</style>