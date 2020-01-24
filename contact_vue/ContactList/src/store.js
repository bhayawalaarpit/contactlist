import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { contactDetails: null, contacts: null, contactId: null },
  mutations: {},
  actions: {
    // Save Contact

    saveContact: ({ commit, dispatch }, formData) => {
      return axios
        .post("/contact/save", formData)
        .then(res => {
          console.info({ SaveContact: res });
        })
        .catch(err => {
          console.warn({ SaveError: err });
        });
    },

    getAllContact: ({ commit, state }) => {
      return axios
        .get("/contact")
        .then(res => {
          state.contacts = res.data;
          // console.info({ getAllContactRes: state.contacts });
        })
        .catch(err => console.warn({ getAllContactErr: err }));
    },

    getContactDetails: ({ commit, state }, id) => {
      return axios
        .get(`/contact/${id}`)
        .then(res => {
          state.contactDetails = res.data;
          state.contactId = id;
        })
        .catch(err => {
          console.warn({ GetContactDetailsErr: err });
        });
    },

    updateContactDetalis: ({ commit, state }, formData) => {
      return (
        axios
          .put(`/contact/edit/${state.contactId}`, formData)
          // .then(res => console.info({ updateContactDetalisres: res }))
          .catch(err => console.warn({ updateContactDetaliserr: err }))
      );
    },
    deleteContact: ({ commit, state }) => {
      return (
        axios
          .delete(`/contact/delete/${state.contactId}`)
          // .then(res => console.info({ DeleteContactData: res }))
          .catch(err => console.warn({ DeleteContactErr: err }))
      );
    },

    cleanupState: ({ commit, state }) => {
      state.contacts = null;
      console.log("Cleanup Data", state.contacts);
    }
  },
  getters: {
    contacts: state => state.contacts,

    contact: state => state.contactDetails
  }
});
