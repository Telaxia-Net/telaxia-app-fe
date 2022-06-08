<template>
  <pf-card>
    <template v-slot:header>
      <div class="flex align-items-center gap-2 ml-3 mt-3" v-if="userProfile">
        <telaxia-avatar
          :w="40"
          :img="userProfile.photo"
          @click="goToProfile()"
        ></telaxia-avatar>
        <span class="username"> {{ userProfile.name }} </span>
        <span class="date">{{ date.toDateString() }}</span>
      </div>
    </template>
    <template v-slot:content>
      <div class="description mb-5">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
      <div class="flex justify-content-center">
        <pf-image
          class="image"
          :src="post.image"
          imageClass="post-image"
          preview
        ></pf-image>
      </div>
      <div class="social flex justify-content-between">
        <div class="rating flex gap-1 mt-2">
          <pf-button
            @click="likePost()"
            :class="{ 'p-button-outlined': !pressLike }"
            icon="pi pi-thumbs-up"
          ></pf-button>
          <pf-button
            @click="dislikePost()"
            :class="{ 'p-button-outlined': !pressDislike }"
            class="p-button-danger"
            icon="pi pi-thumbs-down"
          ></pf-button>
        </div>
        <button class="t-button">
          <i class="pi pi-comments"> </i>
        </button>
      </div>
    </template>
  </pf-card>
</template>

<script>
import TelaxiaAvatar from "./telaxia-avatar.vue";
import DesignerService from "../designers/service/designers-api.service";
export default {
  components: { TelaxiaAvatar },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      pressLike: {
        type: Boolean,
        default: () => false,
      },
      pressDislike: {
        type: Boolean,
        default: () => false,
      },
      date: new Date(),
      userProfile: undefined,
    };
  },
  beforeCreate() {
    let userId = this.post.userId;
    console.log("Hey", userId);
    DesignerService.getDesigner(userId).then((userResponse) => {
      this.userProfile = userResponse.data;
      console.log(this.userProfile);
    });
  },
  created() {
    this.setUserPost();
    this.pressLike = false;
    this.pressDislike = false;
  },
  mounted() {
    this.setUserPost();
  },
  methods: {
    likePost() {
      this.pressLike = !this.pressLike;
      if (this.pressLike) {
        this.pressDislike = false;
      }
      console.log(this.pressLike, this.pressDislike);
    },
    dislikePost() {
      this.pressDislike = !this.pressDislike;
      if (this.pressDislike) {
        this.pressLike = false;
      }
      console.log(this.pressLike, this.pressDislike);
    },
    setUserPost() {
      let userId = this.post.userId;
      console.log("Hey", userId);
      DesignerService.getDesigner(userId).then((userResponse) => {
        this.userProfile = userResponse.data;
        console.log(this.userProfile);
      });
    },
    goToProfile() {
      this.$router.push(`/profile-designer/${this.userProfile.id}`);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Akshar:wght@300;400&display=swap");

.username {
  font-family: "Akshar", sans-serif;
  font-weight: 400;
}

.date {
  font-family: "Akshar", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  opacity: 0.5;
}

.t-button {
  background-color: transparent;
  border: none;
  padding: 0 20px;
  cursor: pointer;
}

.t-button i {
  font-size: 20px;
}
</style>
