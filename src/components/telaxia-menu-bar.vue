<template>
  <div class="menu-bar">
    <div class="telaxia-side-bar">
      <pf-side-bar
        class="side"
        style="background-color: #ef574e"
        v-model:visible="visibleLeft"
        :baseZIndex="10000"
      >
        <div
          class="flex flex-column justify-content-between"
          style="width: 100%; height: 90vh"
        >
          <div class="flex flex-column">
            <div
              class="info-profile mb-6 flex flex-column align-items-center gap-2"
            >
              <telaxia-avatar
                :img="currentUser.photo"
                :w="130"
                class=""
              ></telaxia-avatar>
              <span style="color: #333"> {{ currentUser.name }} </span>
            </div>
            <pf-panel-menu
              class="dark-panel flex flex-column"
              style="width: 100%"
              :model="items"
            />
          </div>
          <div class="flex justify-content-end">
            <pf-button
              icon="pi pi-sign-out"
              label="Sign Out"
              class="p-button-danger"
              style="max-width: 150px"
              @click="signOut()"
            />
          </div>
        </div>
      </pf-side-bar>
    </div>
    <div
      class="telaxia-toolbar flex justify-content-between align-items-center"
    >
      <div class="empty" v-show="!currentUser"></div>
      <pf-button
        v-show="currentUser"
        icon="pi pi-bars"
        class="p-button-rounded p-button-danger ml-2"
        @click="visibleLeft = true"
      />
      <telaxia-logo @click="goToHome()" />
      <div class="mr-2">
        <telaxia-avatar
          @click="goToEditProfile()"
          v-if="currentUser"
          :img="currentUser.photo"
          :w="width"
        ></telaxia-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import TelaxiaLogo from "./telaxia-logo.vue";
import TelaxiaAvatar from "./telaxia-avatar.vue";

export default {
  props: {
    currentUser: undefined,
  },
  components: {
    TelaxiaLogo,
    TelaxiaAvatar,
  },
  name: "telaxia-menu-bar",
  data() {
    return {
      toolBarColor: "#EF574E",
      visibleLeft: false,
      width: 30,
      items: [
        {
          key: "0",
          label: "Projects",
          icon: "pi pi-fw pi-file",
        },
        {
          key: "1",
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              key: "1_0",
              label: "Left",
              icon: "pi pi-fw pi-align-left",
            },
            {
              key: "1_1",
              label: "Right",
              icon: "pi pi-fw pi-align-right",
            },
            {
              key: "1_2",
              label: "Center",
              icon: "pi pi-fw pi-align-center",
            },
            {
              key: "1_3",
              label: "Justify",
              icon: "pi pi-fw pi-align-justify",
            },
          ],
        },
        {
          key: "2",
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              key: "2_0",
              label: "New",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              key: "2_1",
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
            {
              key: "2_2",
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  key: "2_2_0",
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      key: "2_2_0_0",
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  key: "2_2_1",
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
        {
          key: "3",
          label: "Events",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              key: "3_0",
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  key: "3_0_0",
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus",
                },
                {
                  key: "3_0_0",
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
            {
              key: "3_1",
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  key: "3_1_0",
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    signOut() {
      this.visibleLeft = false;
      this.$emit("sign-out");
    },
    goToHome() {
      this.$router.push(`/`);
    },
    goToEditProfile() {
      this.$router.push(`/edit-profile-view`);
    },
  },
};
</script>

<style scoped>
.menu-bar {
  display: flex;
  flex-direction: column;
}
.telaxia-toolbar {
  border: none 0;
  border-radius: 0;
  background-color: v-bind(toolBarColor);
  height: 9vh;
}

.info-profile {
  border: none;
  border-radius: 5px;
  padding: 30px 0;
  background-color: antiquewhite;
}

:deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link),
:deep(.p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a) {
  background-color: salmon;
  border: none;
  color: white;
}

:deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    span:nth-child(2)),
:deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    span:nth-child(3)),
:deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-menuitem-icon) {
  color: white;
}

:deep(.p-panelmenu .p-panelmenu-panel .p-panelmenu-content) {
  padding: 0;
  border: none;
  border-radius: none;
  background-color: salmon;
}

:deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover) {
  background-color: white;
  color: salmon;
}

:deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover
    > span) {
  color: salmon;
}

:deep(.p-panelmenu .p-panelmenu-header:hover .p-panelmenu-header-link span) {
  color: salmon;
}

:deep(.p-panelmenu
    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
    > a:hover) {
  background-color: white;
}

div.logo-telaxia {
  cursor: pointer;
}
</style>
