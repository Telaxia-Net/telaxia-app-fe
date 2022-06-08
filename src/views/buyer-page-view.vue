<template>
  <div class="wrapper">
    <div class="title">
      <strong>Highlights:</strong>
    </div>
    <div class="container-highlights-cards">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1536148020659-4dde4128f8ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1542574621-e088a4464f7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1547597466-50406ff4f363?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
      />
    </div>
  </div>
  <div class="wrapper">
    <div class="title">
      <strong>Filters:</strong>
    </div>
    <div class="container-filters-cards">
      <div class="container-img">
        <div class="filter-title">Jeans</div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1536148020659-4dde4128f8ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
        />
      </div>
      <div class="container-img">
        <div class="filter-title">Invierno</div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1478954755238-0bb0af1dc326?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403"
        />
      </div>
      <div class="container-img">
        <div class="filter-title">Otoño</div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327"
        />
      </div>
      <div class="container-img">
        <div class="filter-title">T-shirt</div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1547597466-50406ff4f363?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BuyerPageView",
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
  text-align: start;
  padding: 0.5em;
}
.container-highlights-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
}
.container-filters-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
}

div.container-highlights-cards > img {
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
  width: 323px;
  height: 350px;
}
div.container-img {
  justify-items: center;
}
div.container-img img {
  min-width: 165px;
  min-height: 260px;
  max-width: 164px;
}
.container-img {
  background-color: lightgrey;
  display: grid;
  padding: 30px;
}
.filter-title {
  font-size: 3em;
  text-align: center;
  font-weight: 500;
  font-family: "Montserrat Alternates", sans-serif;
}
</style>
