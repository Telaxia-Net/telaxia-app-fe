<template>
  <div class="logo-telaxia">
    <img width="40" src="../assets/telaxia-logo.svg" alt="telaxia-logo" />
    <span class="ml-2"> Telaxia </span>
  </div>
</template>

<script>
export default {
  name: "telaxia-logo",
  data() {
    return {
      colorLogo: "#FFE2E2",
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap");

.logo-telaxia {
  display: flex;
  align-items: center;
}
.logo-telaxia span {
  font-family: "Montserrat Alternates", sans-serif;
  color: v-bind(colorLogo);
  font-size: 1.6rem;
}
.logo-telaxia > img {
  transition: all 0.3s ease-in-out;
}

.logo-telaxia:hover > img {
  transform: rotateZ(720deg);
}
</style>
