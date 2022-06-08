<template>
  <div class="flex justify-content-center" v-if="post">
    <pf-card>
      <template v-slot:content>
        <div class="flex gap-4">
          <section class="flex flex-column gap-4">
            <section class="bg-black flex align-items-center">
              <pf-image :src="post.image" preview />
            </section>
            <div class="flex justify-content-between align-items-center">
              <pf-button
                class="buy p-button-raised p-button-success"
                label="Buy"
              ></pf-button>
              <p v-if="design">
                <strong>Price: </strong> <span>{{ design.price }} $</span>
              </p>
            </div>
          </section>
          <section>
            <article class="flex align-items-center gap-2">
              <telaxia-avatar
                :w="50"
                :img="designerPost.photo"
              ></telaxia-avatar>
              <span> {{ designerPost.name }}</span>
            </article>
            <article
              class="flex flex-column justify-content-between"
              style="height: 550px"
            >
              <div>
                <telaxia-comment
                  class="mt-2"
                  v-for="comment in comments"
                  :key="comment.id"
                  :userId="comment.userId"
                  :comment="comment.body"
                  :date="new Date(comment.date)"
                ></telaxia-comment>
              </div>
              <div>
                <telaxia-comment-poster
                  @commented="refreshComments()"
                  :postId="id"
                ></telaxia-comment-poster>
              </div>
            </article>
          </section>
        </div>
      </template>
    </pf-card>
  </div>
</template>

<script>
import TelaxiaComment from "../components/telaxia-comment.vue";
import TelaxiaAvatar from "../components/telaxia-avatar.vue";
import PostService from "../post/service/post-api.service";
import DesignerService from "../designers/service/designers-api.service";
import CommentService from "../comments/service/comment-api.service";
import TelaxiaCommentPoster from "../components/telaxia-comment-poster.vue";
import DesignService from "../designs/service/designs-api.service";

export default {
  components: { TelaxiaAvatar, TelaxiaComment, TelaxiaCommentPoster },
  data() {
    return {
      id: Number(this.$route.params.id),
      post: Object,
      designerPost: Object,
      comments: [],
      design: undefined,
    };
  },
  created() {
    console.log(this.id);
    this.getPostInfo();
    this.getComments();
  },
  methods: {
    getPostInfo() {
      PostService.getPost(this.id)
        .then((postResponse) => {
          this.post = postResponse.data;
          console.log("Look this", postResponse.data.designId);
          return this.post;
        })
        .then((res) => {
          Promise.all([
            this.getUserPostInfo(res.userId),
            this.getDesign(res.designId),
          ]);
        });
    },
    getUserPostInfo(designerId) {
      DesignerService.getDesigner(designerId).then(
        (designerResponse) => (this.designerPost = designerResponse.data)
      );
    },
    getComments() {
      CommentService.getCommentsByPostId(this.id).then(
        (commentsResponse) => (this.comments = commentsResponse.data)
      );
    },
    getDesign(id) {
      DesignService.getDesign(id).then((res) => {
        this.design = res.data;
        console.log(res.data);
      });
    },
    refreshComments() {
      console.log("emmited!");
      this.getComments();
    },
  },
  computed: {
    commentsR() {
      return this.comments;
    },
  },
};
</script>

<style scoped>
:deep(span.p-image.p-component.p-image-preview-container > img) {
  width: 700px;
  height: 500px;
  object-fit: cover;
}

:deep(div.p-card.p-component) {
  height: 700px;
}

:deep(button.p-button.p-component.buy) {
  width: 80px;
}

.bg-black {
  background-color: black;
  height: 600px;
}
</style>
