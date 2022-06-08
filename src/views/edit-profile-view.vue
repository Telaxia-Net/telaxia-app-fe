<template>
  <div class="flex justify-content-center align-items-center">
    <pf-card style="width: 700px">
      <template v-slot:title>
        <div class="flex justify-content-between">
          <h3>Edit Profile</h3>
        </div>
      </template>
      <template v-slot:content>
        <div class="flex justify-content-between">
          <form
            @submit.prevent="signUp(!v$.$invalid)"
            class="p-fluid"
            style="width: 500px"
          >
            <div class="field">
              <div class="p-float-label">
                <pf-input-text
                  id="name"
                  v-model="v$.name.$model"
                  :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                />
                <label
                  for="name"
                  :class="{ 'p-error': v$.name.$invalid && submitted }"
                  >Name*</label
                >
              </div>
              <small
                v-if="
                  (v$.name.$invalid && submitted) || v$.name.$pending.$response
                "
                class="p-error"
                >{{ v$.name.required.$message.replace("Value", "Name") }}</small
              >
            </div>
            <div class="field">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-envelope" />
                <pf-input-text
                  id="email"
                  v-model="v$.email.$model"
                  :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                  aria-describedby="email-error"
                />
                <label
                  for="email"
                  :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >Email*</label
                >
              </div>
              <span v-if="v$.email.$error && submitted">
                <span
                  id="email-error"
                  v-for="(error, index) of v$.email.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
              <small
                v-else-if="
                  (v$.email.$invalid && submitted) ||
                  v$.email.$pending.$response
                "
                class="p-error"
                >{{
                  v$.email.required.$message.replace("Value", "Email")
                }}</small
              >
            </div>
            <div class="field">
              <div class="p-float-label">
                <pf-calendar id="date" v-model="date" :showIcon="true" />
                <label for="date">Birthday</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pf-dropdown
                  id="country"
                  v-model="country"
                  :options="countries"
                  optionLabel="name"
                />
                <label for="country">Country</label>
              </div>
            </div>
            <div class="field-checkbox flex justify-content-center">
              <pf-checkbox
                id="accept"
                name="accept"
                value="Accept"
                v-model="v$.accept.$model"
                :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
              />
              <label
                for="accept"
                :class="{ 'p-error': v$.accept.$invalid && submitted }"
                >I agree to the terms and conditions</label
              >
            </div>
            <pf-button type="submit" label="Save" class="mt-2" />
          </form>
          <div class="image-replace">
            <img
              class="rounded"
              src="https://www.limajiron.com/wp-content/uploads/2021/12/Spider-Man-850x560.jpg"
              alt=""
            />
            <div class="circle profile"></div>
            <span> <i class="pi pi-pencil"></i> Edit </span>
          </div>
        </div>
      </template>
    </pf-card>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import CountryService from "../countries/service/countries.service";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      email: "",
      date: "",
      photo: "",
      country: "",
      accept: null,
      submitted: null,
      countries: [],
    };
  },
  mounted() {
    CountryService.getCountries().then((res) => (this.countries = res));
  },
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      date: {
        required,
      },
      accept: {
        required,
      },
      photo: {
        required,
      },
    };
  },
};
</script>

<style scoped>
.rounded {
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.circle.profile {
  position: absolute;
  z-index: 2;
  background-color: grey;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  opacity: 0;
  transition: all 0.1s ease-in;
}

.image-replace:hover > .circle.profile {
  opacity: 70%;
}

.image-replace {
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-replace > span {
  z-index: 3;
  position: absolute;
  color: white;
  opacity: 0;
  transition: all 0.1s ease-in;
}

.image-replace:hover > span {
  opacity: 1;
}
</style>
