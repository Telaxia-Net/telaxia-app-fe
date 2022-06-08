<template>
  <div class="flex justify-content-center align-items-start">
    <pf-card class="general-view" v-if="user">
      <template v-slot:title> Buyer </template>
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
            <article v-if="contacts" class="flex flex-column gap-2">
              <h1>Designer Contacts</h1>
              <div
                class="contacts-container"
                v-for="contact in contacts"
                :key="contact.id"
              >
                <div class="contact-container flex gap-3 align-items-center">
                  <telaxia-avatar
                    @click="goToDesignerProfile(contact.id)"
                    :w="50"
                    :img="contact.photo"
                  ></telaxia-avatar>
                  <span> {{ contact.name }} </span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </template>
    </pf-card>
  </div>
</template>

<script>
import TelaxiaAvatar from "../components/telaxia-avatar.vue";
import DesignerService from "../designers/service/designers-api.service";
import PostService from "../post/service/post-api.service";
import BuyerService from "../buyers/service/buyers-api.service";

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
      contacts: [],
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
      BuyerService.getBuyer(id)
        .then((buyerResponse) => {
          this.user = buyerResponse.data;
          console.log("array?", this.user.publicContacts);
          return this.user.publicContacts;
        })
        .then((res) => {
          let contactIds = res;
          let PromiseArr = [];
          console.log(Object.keys(contactIds).length);
          for (let i = 0; i < Object.keys(contactIds).length; i++)
            PromiseArr.push(
              DesignerService.getDesigner(contactIds[i]).then((res) => {
                this.contacts.push(res.data);
                console.log(res.data);
              })
            );
          Promise.all(PromiseArr);
          console.log("Array", this.contacts);
        });
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
    getContacts(id) {
      BuyerService.getBuyer(id).then();
    },
    goToDesignerProfile(designerId) {
      // this.$router.push(`/profile-designer/${designerId}`);
      this.$router.push({
        name: "profile-designer",
        params: { id: designerId },
      });
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
