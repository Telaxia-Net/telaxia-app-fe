<template>
  <div class="flex justify-content-center align-items-start">
    <pf-card class="general-view" v-if="user">
      <template v-slot:title> Designer </template>
      <template v-slot:content>
        <div class="profile-description">
          <section>
            <telaxia-avatar :img="user.photo"></telaxia-avatar>
          </section>
          <section class="flex flex-column gap-2">
            <h1>{{ user.name }}</h1>
            <article>
              <h1>Biography</h1>
              <p class="w-12">{{ user.bio }}</p>
            </article>
            <article>
              <span> <strong> Rating </strong></span>
              <pf-rating
                style="display: inline-block"
                v-model="rating"
                :cancel="false"
              ></pf-rating>
            </article>
            <pf-button label="Contact" icon="pi pi-book" style="width: 120px" />
            <article>
              <h1></h1>
            </article>
          </section>
        </div>
        <h2 class="mb-4">Gallery</h2>
        <div class="gallery" v-if="posts">
          <div v-for="post in posts" :key="post.id">
            <pf-image
              class="gallery-image"
              :src="post.image"
              @click="goToPostDetail(post.id)"
              alt=""
            />
          </div>
        </div>
      </template>
    </pf-card>
  </div>
</template>

<script>
import TelaxiaAvatar from "../components/telaxia-avatar.vue";
import DesignerService from "../designers/service/designers-api.service";
import PostService from "../post/service/post-api.service";

export default {
  components: { TelaxiaAvatar },
  props: {
    w: Number,
  },
  data() {
    return {
      user: undefined,
      posts: [],
      rating: 0,
    };
  },
  name: "profile-designer-view",
  created() {
    this.getUserInfo();
    this.getPostsInfo();
  },
  methods: {
    getUserInfo() {
      let id = this.$route.params.id;
      console.log(id);
      DesignerService.getDesigner(id).then(
        (designerResponse) => (this.user = designerResponse.data)
      );
    },
    getPostsInfo() {
      let id = this.$route.params.id;
      PostService.getPostsByUserId(id).then(
        (postsResponse) => (this.posts = postsResponse.data)
      );
    },
    goToPostDetail(postId) {
      console.log(postId);
      this.$router.push(`/post-detail/${postId}`);
      // this.$router.push({ name: "post-detail", params: { postId } });
    },
  },
};
</script>
<style scoped>
.profile-description {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2fr 1fr;
}

.profile-description > section:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.profile-description > section:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 0 40px;
}

.profile-description > section:nth-child(2) > section > article > p {
  color: red;
}

:deep(span.p-rating-icon.pi.pi-star-fill),
:deep(span.p-rating-icon.pi.pi-star-fill:hover) {
  color: rgb(255, 208, 0);
}

:deep(span.p-image.p-component) {
  width: 100%;
}
:deep(span.p-image.p-component > img) {
  width: 100%;
  height: 65%;
  object-fit: cover;
}

:deep(div.p-card.p-component.general-view) {
  width: 1000px;
  cursor: pointer;
}

:deep(span.p-image.p-component.gallery-image.p-image-preview-container > img) {
  height: 300px;
  object-fit: cover;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.gallery > div > img {
  width: 100%;
  height: 65%;
  object-fit: cover;
}
</style>
