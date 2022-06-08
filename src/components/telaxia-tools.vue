<template>
  <div class="Tools">
    <h5 class="tools__title">Tools</h5>

    <div class="tools_item">
      <div class="tools_item_grid pi pi-pencil"></div>
      <div class="tools_item_grid pi pi-palette"></div>
      <div class="tools_item_grid pi pi-history"></div>
      <div class="tools_item_grid pi pi-file-o"></div>
      <div class="tools_item_grid pi pi-image"></div>
      <div class="tools_item_grid pi pi-save"></div>
      <div class="tools_item_grid pi pi-trash"></div>
      <div class="tools_item_grid pi pi-undo"></div>
      <div class="tools_item_grid pi pi-search-plus"></div>
      <div class="tools_item_grid pi pi-search-minus"></div>
    </div>

    <h5 class="Tools__title">Colors</h5>
    <div class="Tools__items">
      <pf-color-picker class="tools__item__color-picker" />
    </div>

    <h5 class="Tools__title">Transparency</h5>
    <div class="Tools__items">
      <pf-slider
        class="Tools__Slider"
        v-model="slider1"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>

    <h5 class="Tools__title">Size</h5>
    <div class="Tools__items">
      <pf-slider
        class="Tools__Slider"
        v-model="slider1"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "telaxia-tools.vue",
  data() {
    return {
      slider1: 0,
    };
  },
};
</script>

<style scoped>
::v-deep .tools__item__color-picker * {
  width: 100% !important;
}
.tools__title {
  text-align: center;
}
.Tools {
  width: 85px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.tools_item {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tools_item_grid {
  width: calc(50% - 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Tools__Slider {
  width: 100%;
}
</style>
