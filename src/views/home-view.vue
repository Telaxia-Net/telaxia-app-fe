<template>
  <div class="home flex justify-content-center gap-3" v-if="currentUser">
    <div class="flex flex-column col-7 gap-3">
      <telaxia-publisher :currentUser="currentUser"></telaxia-publisher>
      <telaxia-tab-view>
        <template v-slot:favorites>
          <div class="flex flex-column">
            <telaxia-post
              v-for="post in posts"
              :key="post.id"
              :post="post"
            ></telaxia-post>
          </div>
        </template>
        <template v-slot:new>
          <p>New</p>
        </template>
        <template v-slot:best>
          <p>Best</p>
        </template>
      </telaxia-tab-view>
    </div>
    <div class="col-4">
      <telaxia-v-carousel></telaxia-v-carousel>
    </div>
  </div>
</template>

<script>
import TelaxiaPost from "../components/telaxia-post.vue";
import TelaxiaTabView from "../components/telaxia-tab-view.vue";
import TelaxiaPublisher from "../components/telaxia-publisher.vue";
import TelaxiaVCarousel from "../components/telaxia-vcarousel.vue";
import PostService from "../post/service/post-api.service";
import SessionSecurity from "../security/service/session-auth.service";
import DesignerService from "../designers/service/designers-api.service";

export default {
  components: {
    TelaxiaTabView,
    TelaxiaPublisher,
    TelaxiaPost,
    TelaxiaVCarousel,
  },
  data() {
    return {
      currentUser: Object,
      posts: [],
    };
  },
  created() {
    this.getAllPosts();
    this.setLoggedUser();
  },
  methods: {
    getAllPosts() {
      PostService.getPosts().then((response) => (this.posts = response.data));
    },
    setLoggedUser() {
      let query = SessionSecurity.getCurrentUser();
      if (query) {
        const userId = query.id;
        DesignerService.getDesigner(userId).then((response) => {
          this.currentUser = response.data;
        });
      } else {
        console.log("empty");
      }
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
