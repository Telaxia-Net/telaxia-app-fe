<template>
  <div class="flex justify-content-between">
    <pf-text-area
      :placeholder="'Comment something'"
      :autoResize="true"
      :rows="2"
      :cols="34"
      v-model="commentText"
    ></pf-text-area>
    <pf-button label="Post" @click="postComment()"></pf-button>
  </div>
</template>

<script>
import SessionSecurity from "../security/service/session-auth.service";
import CommentService from "../comments/service/comment-api.service";
export default {
  props: {
    postId: Number,
  },
  data() {
    return {
      commentText: undefined,
      posterId: SessionSecurity.getCurrentUser().id,
    };
  },
  created() {
    // this.posterId = SessionSecurity.getCurrentUser().id;
    console.log("postId", this.postId);
    console.log("posterId", this.posterId);
  },
  methods: {
    postComment() {
      if (this.commentText) {
        let comment = {
          userId: this.posterId,
          body: this.commentText,
          postId: this.postId,
          date: new Date(),
        };
        CommentService.postComment(comment);
        this.commentText = "";
        this.$emit("commented");
      }
    },
  },
};
</script>

<style></style>
