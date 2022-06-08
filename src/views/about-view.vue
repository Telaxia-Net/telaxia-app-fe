<template>
  <div class="about">
    <div class="title">
      <strong>The Team</strong>
    </div>
    <div class="container-cards">
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://i.ibb.co/YyPv7cZ/Adrian.jpg"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Andres Reynoso</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U202010196"</p>
        </div>
      </div>
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://i.ibb.co/rkmPQhs/Silene.jpg"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Silene Nazareth</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U20201a213"</p>
        </div>
      </div>
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://i.ibb.co/z2CkZSL/Erik.jpg"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Erik Romero</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U202019857"</p>
        </div>
      </div>
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://i.ibb.co/94PCZZD/Leonardo.jpg"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Leonardo Grau</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U201823031"</p>
        </div>
      </div>
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://i.ibb.co/W2zFBcp/Renato.jpg"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Renato Castillo</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U201511892"</p>
        </div>
      </div>
      <div class="profile">
        <img
          class="profile-image"
          alt="design image"
          src="https://media.discordapp.net/attachments/974475987398053948/978836818881552404/unknown.png"
        />
        <div class="container-x col-5">
          <h1 class="spaces">Caleb Reategui</h1>
          <h2 class="spaces">Carrera: Ingenieria de Software</h2>
          <p class="spaces desc">"U202016106"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-view",
  data() {
    return {};
  },
};
</script>

<style scoped>
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
.profile {
  display: flex;
  background-color: #ffffff;
  margin-left: 2rem;
  border-radius: 3rem;
  box-shadow: 1px 1px 1px;
}
.profile-image {
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  margin-left: 5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
}
.spaces {
  margin-top: 1.5rem;
  margin-left: 2.5rem;
  line-height: 1.6rem;
}
.desc {
  font-size: 1.2rem;
}
</style>
