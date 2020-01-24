import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

import SaveContact from "./components/contact/SaveContact";
import ListContact from "./components/contact/contactList";
import DetailsContact from "./components/contact/contactDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListContact",
    component: ListContact,
    meta: { title: "Contact List" }
  },
  {
    path: "/new",
    name: "NewContact",
    component: SaveContact,
    meta: { title: "New Contact" }
  },
  {
    path: "/contact/:id",
    name: "ContactDetails",
    component: DetailsContact,
    meta: { title: "Contact Details" }
  }
];

export default new VueRouter({ mode: "history", routes });
