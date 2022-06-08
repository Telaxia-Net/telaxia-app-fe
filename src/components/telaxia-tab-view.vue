<template>
  <pf-card class="card">
    <template #content>
      <pf-tab-view class="pf-tab-view-custom" ref="pf-tab-view4">
        <pf-tab-panel>
          <template #header>
            <div class="header">
              <i class="pi pi-star"></i>
              <span>Favorites</span>
            </div>
          </template>
          <slot name="favorites"></slot>
        </pf-tab-panel>
        <pf-tab-panel>
          <template #header>
            <div class="header">
              <i class="pi pi-bell"></i>
              <span>New</span>
            </div>
          </template>
          <slot name="new"></slot>
        </pf-tab-panel>
        <pf-tab-panel>
          <template #header>
            <div class="header">
              <i class="pi pi-bolt"></i>
              <span>Best</span>
            </div>
          </template>
          <slot name="best"></slot>
        </pf-tab-panel>
      </pf-tab-view>
    </template>
  </pf-card>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  padding: 0 30px;
  max-width: 1000px;
}

.header * {
  margin: 0 3px;
}
</style>
