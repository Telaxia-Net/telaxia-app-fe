<template>
  <div class="contact-view">
    <img
      class="contact_us_image"
      src="https://c.files.bbci.co.uk/52D5/production/_111050212_mobile.jpg"
      alt="image"
    />
    <TelaxiaFormContact />
  </div>
</template>

<script>
import TelaxiaFormContact from "../components/telaxia-form-contact.vue";
export default {
  name: "contact-view.vue",
  components: {
    TelaxiaFormContact,
  },
};
</script>

<style scoped>
.contact-view {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.contact_us_image {
  min-width: 470px;
  max-width: 470px;
  width: 470px;
  height: 575px;
}
</style>
