<template>
  <div class="form-demo" v-if="!userRegistered">
    <pf-dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '80vw' }"
      :style="{ width: '30vw' }"
      position="top"
    >
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i
          class="pi pi-check-circle"
          :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5>Registration Successful!</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          Your account is registered under name <b>{{ name }}</b> ; it'll be
          valid next 30 days without activation. Please check
          <b>{{ email }}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <pf-button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </pf-dialog>

    <div class="flex justify-content-center">
      <pf-card class="card">
        <template v-slot:content>
          <h2 class="text-center">Register</h2>
          <form @submit.prevent="signUp(!v$.$invalid)" class="p-fluid">
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
                <pf-password
                  id="password"
                  v-model="v$.password.$model"
                  :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                  toggleMask
                >
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer="sp">
                    {{ sp.level }}
                    <Divider />
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>
                </pf-password>
                <label
                  for="password"
                  :class="{ 'p-error': v$.password.$invalid && submitted }"
                  >Password*</label
                >
              </div>
              <small
                v-if="
                  (v$.password.$invalid && submitted) ||
                  v$.password.$pending.$response
                "
                class="p-error"
                >{{
                  v$.password.required.$message.replace("Value", "Password")
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
            <div class="text-center">
              <span class="mr-1">Already have an account?</span>
              <router-link to="/login">Sign In</router-link>
            </div>
            <pf-button type="submit" label="Submit" class="mt-2" />
          </form>
        </template>
      </pf-card>
    </div>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import CountryService from "../countries/service/countries.service";
import SessionSecurity from "../security/service/session-auth.service";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      userRegistered: undefined,
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
    };
  },
  countryService: null,
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      accept: {
        required,
      },
    };
  },
  created() {
    // this.countryService = new CountryService();
    this.userRegistered = JSON.parse(SessionSecurity.getCurrentUser());
    console.log("hola", this.userRegistered);
    if (this.userRegistered) {
      this.$router.push("/home");
    }
  },
  mounted() {
    CountryService.getCountries().then((res) => (this.countries = res));
  },
  methods: {
    signUp(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
      SessionSecurity.signUp(this.dataSignUp);
      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.country = null;
      this.accept = null;
      this.submitted = false;
    },
  },

  computed: {
    dataSignUp() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        date: this.date,
        country: this.country,
      };
      return user;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
