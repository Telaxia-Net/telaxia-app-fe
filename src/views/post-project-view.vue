<template>
  <div class="general-view">
    <div class="title">
      <p class="title-p">Post Project Interface</p>
    </div>
    <div class="content">
      <div class="first-section"></div>
      <div class="second-section">
        <div class="sub-section">
          <div class="images">
            <img
              class="image"
              alt=""
              src="https://play-lh.googleusercontent.com/cu8v5sj2GskMQVTtM0fvHGSqhs61d3BQSbaxHJ6Eak8r-smHQPG91ZNKtkynfotztkQ=w240-h480-rw"
            />
          </div>
          <div class="images">
            <img
              class="image"
              alt=""
              src="https://play-lh.googleusercontent.com/cu8v5sj2GskMQVTtM0fvHGSqhs61d3BQSbaxHJ6Eak8r-smHQPG91ZNKtkynfotztkQ=w240-h480-rw"
            />
          </div>
          <div class="images">
            <img
              class="image"
              alt=""
              src="https://play-lh.googleusercontent.com/cu8v5sj2GskMQVTtM0fvHGSqhs61d3BQSbaxHJ6Eak8r-smHQPG91ZNKtkynfotztkQ=w240-h480-rw"
            />
          </div>
          <div class="images">
            <img
              class="image"
              alt=""
              src="https://us.123rf.com/450wm/chorniy10/chorniy101602/chorniy10160200816/52298062-volumen-iconos-símbolo-signo-más-estilo-moderno-colorido-.jpg?ver=6"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="button-section">
      <pf-button class="b-bottom-button"> Save </pf-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PostProjectView",
});
</script>
<style scoped>
.general-view {
  text-align: center;
  align-content: center;
  align-items: center;
}
/*----------------TITLE----------------*/
.title {
  width: 80%;
  margin: 0px auto;
}
.title-p {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 180%;
  color: darkorange;
  text-align: left;
  margin-bottom: 2rem;
}
/*----------------CONTENT----------------*/
.content {
  padding-top: 5%;
  padding-bottom: 5%;
  width: 80%;
  background: darkgray;
  margin: 0px auto;
  height: 30rem;
  border-radius: 0.2rem;
}
/*----------------FIRST PART----------------*/
.first-section {
  border-radius: 0.3rem;
  background: white;
  width: 90%;
  height: 50%;
  margin: 0px auto;
}
/*----------------SECOND PART----------------*/
.second-section {
  width: 80%;
  height: 45%;
  margin: 0px auto;
  text-align: center;
}
.sub-section {
  width: 100%;
  margin: 0px auto;
}
.image {
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  margin-left: 8.5%;
  margin-top: 5%;
  float: left;
}
.image:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
/*----------------BUTTON PART----------------*/
.button-section {
  padding: 3rem 1rem 3rem 1rem;
}
.b-bottom-button {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 120%;
  background: #ef574e;
  border: none;
}
</style>
