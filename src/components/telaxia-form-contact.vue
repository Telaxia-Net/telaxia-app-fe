<template>
  <form class="form">
    <h2 class="form_title">Send us a message or a new feedback</h2>
    <div class="form-row">
      <div class="form-item">
        <h5>First Name</h5>
        <pf-input-text type="text" />
      </div>

      <div class="form-item">
        <h5>Last Name</h5>
        <pf-input-text type="text" />
      </div>
    </div>

    <div class="form-item">
      <h5>Email</h5>
      <pf-input-text type="text" />
    </div>

    <div class="form-item">
      <h5>Message Description</h5>
      <pf-text-area :autoResize="true" rows="5" cols="30" />
    </div>

    <div class="form-item">
      <VueRecaptcha sitekey="http://localhost:3000/contact-us" />
    </div>

    <div class="form_item_button">
      <pf-button>Send Message</pf-button>
    </div>
  </form>
</template>

<script>
import VueRecaptcha from "vue3-recaptcha2";
export default {
  name: "telaxia-form-contact.vue",
  components: {
    VueRecaptcha,
  },
};
</script>

<style scoped>
.form_item_button {
  text-align: right;
}
.form_title {
  font-size: 1.5rem;
  text-align: center;
}
.form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #c4c4c4;
  padding: 10px;
  height: 575px;
}
.form-row .form-item {
  width: calc(50% - 10px);
}
.form-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.form-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
