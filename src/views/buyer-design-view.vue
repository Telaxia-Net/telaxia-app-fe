<template>
  <div class="buyer-design">
    <div class="design col-9">
      <img
        class="design-image"
        alt="design image"
        src="https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/e925de22-44e0-4276-bb92-0b4101f5f834/Blank%20Jacket_thumb_900x900"
      />
      <div class="container-x col-8">
        <h1 class="spaces">Jacket</h1>
        <i class="pi pi-star-fill stars"></i>
        <i class="pi pi-star-fill stars"></i>
        <i class="pi pi-star-fill stars"></i>
        <i class="pi pi-star-fill stars"></i>
        <i class="pi pi-star-fill stars"></i>
        <h2 class="spaces">$ 9.99</h2>
        <p class="spaces desc">
          This T-Shirt was made with cotton and has a slick black design.
        </p>
        <pf-button label="Buy" class="spaces p-button-danger col-1" />
      </div>
    </div>
    <div class="commentSect col-7">
      <div class="section">
        <h1>Comments:</h1>
      </div>
      <div class="justify-content-left col-10">
        <telaxia-publisher></telaxia-publisher>
      </div>
      <div class="comments">
        <img
          class="comment-image"
          alt="comment image"
          src="data:image/jpeg;base64,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"
        />
        <div class="container-x col-8">
          <h2 class="spaces">Hans, Get Ze Flammenwerfer</h2>
          <i class="pi pi-star-fill stars"></i>
          <i class="pi pi-star-fill stars"></i>
          <i class="pi pi-star-fill stars"></i>
          <i class="pi pi-star stars"></i>
          <i class="pi pi-star stars"></i>
          <p class="spaces">Really amazing design, i want to buy it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import TelaxiaPublisher from "../components/telaxia-publisher.vue";
export default defineComponent({
  name: "BuyerDesignView",
  components: {},
});
</script>

<style scoped>
.design {
  display: flex;
  background-color: #ffffff;
  margin-left: 7rem;
  border-radius: 3rem;
  box-shadow: 1px 1px 1px;
}
.design-image {
  width: 20rem;
  height: 20rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.spaces {
  margin-top: 1.5rem;
  margin-left: 2.5rem;
  line-height: 1.6rem;
  spaces-align: justify;
}
.stars {
  margin-top: 1.5rem;
  margin-left: 2.5rem;
  line-height: 1.6rem;
  spaces-align: justify;
  font-size: 2rem;
  color: yellow;
}
.desc {
  font-size: 1.2rem;
}
.commentSect {
  margin-top: 2rem;
  margin-left: 9rem;
}
.comments {
  display: flex;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px;
}
.comment-image {
  width: 5rem;
  height: 5rem;
  border-radius: 3rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
