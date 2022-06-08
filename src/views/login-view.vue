<template>
  <div class="flex justify-content-center" v-if="!userRegistered">
    <pf-card>
      <template #content>
        <div class="show-login flex">
          <div class="col form-demo" style="height: 600px">
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
                <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">Logged</p>
              </div>
              <template #footer>
                <div class="flex justify-content-center">
                  <pf-button
                    label="OK"
                    @click="toggleDialog()"
                    class="p-button-text"
                  />
                </div>
              </template>
            </pf-dialog>

            <div class="flex justify-content-center">
              <div class="card">
                <h3 class="text-center">Login</h3>
                <form @submit.prevent="signIn(!v$.$invalid)" class="p-fluid">
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
                        :class="{
                          'p-invalid': v$.password.$invalid && submitted,
                          'p-password-meter': false,
                        }"
                        toggleMask
                        weakLabel
                      >
                      </pf-password>
                      <label
                        for="password"
                        :class="{
                          'p-error': v$.password.$invalid && submitted,
                        }"
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
                        v$.password.required.$message.replace(
                          "Value",
                          "Password"
                        )
                      }}</small
                    >
                  </div>
                  <div class="field-checkbox">
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
                      >I agree to the terms and conditions*</label
                    >
                  </div>
                  <pf-button type="submit" label="Submit" class="mt-2" />
                </form>
              </div>
            </div>
          </div>
          <div
            class="col promo burning-orange flex flex-column justify-content-center align-items-center"
            style="height: 600px"
          >
            <div
              class="flex flex-column justify-content-center align-items-center"
              style="text-align: center"
            >
              <h1 class="mb-2">New to Telaxia?</h1>
              <p>
                Join the <strong>cutest</strong> and
                <strong>imaginative</strong> clothe design community of all the
                world!
              </p>
              <pf-button
                @click="goToSignUpView()"
                style="width: 200px; background-color: white; color: #ff4b2b"
                label="Sign Up"
                class="p-button-rounded mt-4"
              />
            </div>
          </div>
        </div>
      </template>
    </pf-card>
  </div>
</template>

<script>
// import sessionAuthService from "../security/service/session-auth.service";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import SessionSecurity from "../security/service/session-auth.service";
// import CountryService from "./service/CountryService";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      userRegistered: undefined,
      email: "",
      password: "",
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
    };
  },
  countryService: null,
  validations() {
    return {
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
    this.userRegistered = JSON.parse(SessionSecurity.getCurrentUser());
    // this.countryService = new CountryService();
  },
  mounted() {
    // this.countryService.getCountries().then((data) => (this.countries = data));
  },
  methods: {
    goToSignUpView() {
      this.$router.push("/sign-up");
    },
    goToHomeView() {
      this.$router.push("/home");
    },
    signIn(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      SessionSecurity.signIn(this.getUserData).then((response) => {
        const currentAccessToken = response.data.accessToken;
        const currentUserRegister = response.data.user;
        SessionSecurity.setCurrentToken(currentAccessToken);
        SessionSecurity.setCurrentUser(JSON.stringify(currentUserRegister));
        console.log(SessionSecurity.getCurrentUser());
        this.$emit("logged");
        this.toggleDialog();
      });
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;
      if (!this.showMessage) {
        this.resetForm();
        this.goToHomeView();
      }
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.accept = null;
      this.submitted = false;
    },
  },
  computed: {
    getUserData() {
      let user = {
        email: this.email,
        password: this.password,
      };
      return user;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  .card {
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

:deep(div.p-card.p-component) {
  width: 900px;
  height: 600px;
}

:deep(div.p-card-body),
:deep(div.p-card-content) {
  padding: 0;
}

.promo {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
}

:deep(button.p-button.p-component.p-button-rounded) {
  border: none;
}

.burning-orange {
  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    190deg,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    190deg,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
