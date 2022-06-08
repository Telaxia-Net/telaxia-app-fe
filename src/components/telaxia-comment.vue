<template>
  <div class="comment">
    <span class="mr-2"
      ><strong> {{ userName }} </strong></span
    >
    <span>{{ comment }}</span>
    <p>{{ date.toDateString() }}</p>
  </div>
</template>

<script>
// import designersApiService from '../designers/service/designers-api.service';
import UserService from "../user/service/users-api.service";
export default {
  props: {
    userId: {
      type: Number,
      default: () => 0,
    },
    comment: {
      type: String,
      default: () => "Comment",
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      userName: {
        type: String,
        default: () => "",
      },
    };
  },
  methods: {
    getUserName() {
      UserService.getUserName(this.userId).then((res) => {
        this.userName = res;
      });
    },
  },
  created() {
    console.log("wow", this.userId);
    this.getUserName();
  },
};
</script>

<style>
.comment {
  width: 360px;
  /*background-color: red;*/
}

.comment > p {
  font-size: 13px;
  font-weight: 100;
  color: rgb(156, 156, 156);
}
</style>
