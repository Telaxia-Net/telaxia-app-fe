<template>
  <div class="wrapper">
    <div class="title">
      <strong>Designs</strong>
    </div>
    <div class="container-cards">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1620961062439-604a2d52e090?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1592854615370-b13b4d5d6848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "OpenProjectView",
});
</script>

<style scoped>
* {
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title {
  display: block;
  font-size: 3em;
  text-align: center;
  padding: 0.5em;
}
.container-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
}
div.container-cards > img {
  border: 5px solid transparent;
  min-width: 300px;
  min-height: 350px;
  background: rgb(255, 225, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 225, 255, 1) 16%,
    rgba(202, 246, 255, 1) 71%,
    rgba(255, 175, 138, 1) 100%
  );
  width: 300px;
  height: 350px;
}
</style>
