<template>
  <div class="all">
    <telaxia-menu-bar
      @sign-out="signOut"
      :currentUser="currentUser"
    ></telaxia-menu-bar>
    <div class="flex justify-content-center align-items-center">
      <router-view @logged="setLoggedUser"></router-view>
    </div>
  </div>
</template>

<script>
import SessionSecurity from "./security/service/session-auth.service";
import DesingerService from "./designers/service/designers-api.service";
import TelaxiaMenuBar from "./components/telaxia-menu-bar.vue";
export default {
  components: {
    TelaxiaMenuBar,
  },
  data() {
    return {
      currentUser: undefined,
    };
  },
  created() {
    this.setLoggedUser();
  },
  methods: {
    setLoggedUser() {
      let query = SessionSecurity.getCurrentUser();
      if (query) {
        const userId = query.id;
        DesingerService.getDesigner(userId).then((response) => {
          this.currentUser = response.data;
        });
      } else {
        console.log("empty");
      }
    },
    signOut() {
      SessionSecurity.signOut();
      this.currentUser = undefined;
      this.$router.push("/login");
    },
  },
  // watch: {
  //   currentUser(before, after) {
  //     console.log("before", before);
  //     console.log("after", after);
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: rgb(255, 242, 218);
}
.post-image {
  width: 100%;
  height: 100%;
  max-width: 430px;
  max-height: 430px;
  object-fit: cover;
  border-radius: 5px;
}

div.flex.justify-content-center.align-items-center {
  height: 91vh;
}
</style>
