<template>
  <div class="Workspace">
    <Tools class="Workspace__tools" />

    <div class="Workspace__paper" />
  </div>
</template>

<script>
import Tools from "../components/telaxia-tools.vue";
export default {
  name: "designer-workspace-view.vue",
  components: {
    Tools,
  },
};
</script>

<style scoped>
.Workspace {
  position: relative;
}
.Workspace__tools {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.Workspace__paper {
  background: white;
  width: calc(100% - 200px);
  margin-left: 100px;
  height: calc(100vh - 200px);
  background-image: url(https://promart.vteximg.com.br/arquivos/ids/505478-1000-1000/48184.jpg?v=637327778257970000);
  background-size: contain;
  background-position: center;
}
</style>
