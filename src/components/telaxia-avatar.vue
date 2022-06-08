<template>
  <div class="telaxia-avatar">
    <img :style="{ width: w + 'px', height: w + 'px' }" :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    w: Number,
    img: String,
  },
  name: "telaxia-avatar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.telaxia-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
}

.telaxia-avatar img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.telaxia-avatar p {
  color: white;
}
</style>
