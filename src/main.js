import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Components
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";
import SideBar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import PanelMenu from "primevue/panelmenu";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import Carousel from "primevue/carousel";
import Message from "primevue/message";
import InlineMessage from "primevue/inlinemessage";
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import DropDown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import ColorPicker from "primevue/colorpicker";
import Slider from "primevue/slider";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Rating from "primevue/rating";
import Textarea from "primevue/textarea";

//Styles
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true }); //ripple efect "efecto rebote"

app.component("pf-menu-bar", Menubar);
app.component("pf-tool-bar", Toolbar);
app.component("pf-button", Button);
app.component("pf-split-button", SplitButton);
app.component("pf-side-bar", SideBar);
app.component("pf-avatar", Avatar);
app.component("pf-avatar-group", AvatarGroup);
app.component("pf-panel-menu", PanelMenu);
app.component("pf-tab-view", TabView);
app.component("pf-tab-panel", TabPanel);
app.component("pf-card", Card);
app.component("pf-input-text", InputText);
app.component("pf-image", Image);
app.component("pf-carousel", Carousel);
app.component("pf-message", Message);
app.component("pf-inline-message", InlineMessage);
app.component("pf-color-picker", ColorPicker);
app.component("pf-slider", Slider);
app.component("pf-password", Password);
app.component("pf-checkbox", Checkbox);
app.component("pf-dropdown", DropDown);
app.component("pf-calendar", Calendar);
app.component("pf-dialog", Dialog);
app.component("pf-divider", Divider);
app.component("pf-rating", Rating);
app.component("pf-text-area", Textarea);

app.mount("#app");
