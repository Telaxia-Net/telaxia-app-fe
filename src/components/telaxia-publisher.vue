<template>
  <pf-card class="card">
    <template v-slot:content>
      <div class="flex justify-content-center gap-3">
        <telaxia-avatar :w="45" :img="currentUser.photo"></telaxia-avatar>
        <pf-input-text
          style="width: 80%"
          placeholder="Write something..."
          type="text"
          v-model="data"
        />
        <pf-button icon="pi pi-image"></pf-button>
      </div>
    </template>
  </pf-card>
</template>

<script>
import TelaxiaAvatar from "./telaxia-avatar.vue";
export default {
  props: ["currentUser"],
  components: {
    TelaxiaAvatar,
  },
  data() {
    return {
      data: undefined,
    };
  },
};
</script>

<style scoped>
.card {
  max-width: 1000px;
}
</style>
