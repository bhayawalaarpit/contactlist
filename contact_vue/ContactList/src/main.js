import Vue from "vue";
import "./style.scss";
import App from "./App.vue";
// import axios from "axios";
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faAddressBook,
  faUserPlus,
  faUserEdit,
  faTrashAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";
import { NavbarPlugin } from "bootstrap-vue";

library.add(faPlus, faMinus, faAddressBook, faUserPlus, faUserEdit, faTrashAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);
Vue.use(Vuelidate);

new Vue({ el: "#app", store, router, render: h => h(App) });
