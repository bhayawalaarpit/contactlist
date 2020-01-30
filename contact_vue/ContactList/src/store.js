import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactDetails: null,
    contacts: null,
    contactId: null,
    loader: false
  },
  mutations: {},
  actions: {
    // Save Contact
    saveContact: ({ commit, dispatch }, formData) => {
      return axios
        .post("/contact/save", formData)
        .then(res => {
          router.push({ name: "ListContact" });
        })
        .catch(err => {
          console.warn("SaveError:", err.response.data);
        });
    },

    getAllContact: ({ commit, state }) => {
      state.loader = true;
      return axios
        .get("/contact")
        .then(res => {
          state.loader = false;
          state.contacts = res.data;
        })
        .catch(err => {
          state.loader = false;
          console.warn("getAllContactErr", err);
        });
    },

    getContactDetails: ({ commit, state }, id) => {
      state.loader = true;
      return axios
        .get(`/contact/${id}`)
        .then(res => {
          state.contactDetails = res.data;
          state.contactId = id;
          state.loader = false;
        })
        .catch(err => {
          state.loader = false;
          console.warn("GetContactDetailsErr", err);
        });
    },

    updateContactDetalis: ({ commit, state }, formData) => {
      return axios
        .put(`/contact/edit/${state.contactId}`, formData)
        .then(res => router.push({ name: "ListContact" }))
        .catch(err => console.warn({ updateContactDetaliserr: err }));
    },
    deleteContact: ({ commit, state }) => {
      return axios
        .delete(`/contact/delete/${state.contactId}`)
        .then(res => router.push({ name: "ListContact" }))
        .catch(err => console.warn({ DeleteContactErr: err }));
    },

    cleanupState: ({ commit, state }) => {
      state.contacts = null;
      console.log("Cleanup Data", state.contacts);
    }
  },
  getters: {
    contacts: state => state.contacts,
    contact: state => state.contactDetails,
    loader: state => state.loader
  }
});
