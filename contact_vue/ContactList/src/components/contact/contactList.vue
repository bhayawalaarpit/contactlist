<template>
  <b-container>
    <ul class="pagination justify-content-center" v-if="search === ''">
      <li
        class="page-item"
        v-for="(object, letter) in contactList"
        :key="letter"
      >
        <a class="page-link" v-bind:href="`#contact-letter-${letter}`">{{
          letter
        }}</a>
      </li>
    </ul>

    <b-col sm="4" class="container_search">
      <app-search-contact
        @contactData="contactList = $event"
        @searchData="search = $event"
      ></app-search-contact>

    </b-col>

    <b-col sm="6" class="container_list">
      <b-list-group
        v-for="(object, letter) in contactList"
        :key="letter"
        v-bind:id="`contact-letter-${letter}`"
      >
        <b-list-group-item variant="danger">
          <h4>{{ letter }}</h4>
        </b-list-group-item>

        <b-list-group-item v-if="object != null">
          <router-link
            tag="li"
            class="list-group-item more"
            v-for="contact in object"
            :key="contact._id"
            :to="'/contact/' + contact._id"
          >
            {{ contact.title }}
          </router-link>
        </b-list-group-item>
        <!-- <b-list-group-item v-else>
          <h3>Data was not found</h3>
        </b-list-group-item> -->
      </b-list-group>
    </b-col>
  </b-container>
</template>
<script>
import { groupByName } from "../../functions";
import debounce from "lodash/debounce";
import searchcontact from "./searchContact";

export default {
  data() {
    return { contactList: [], search: "" };
  },
  components: {
    appSearchContact: searchcontact
  },
  created() {
    this.$store.dispatch("getAllContact");
    setTimeout(() => {
      this.contactList = groupByName(this.$store.getters.contacts);
    }, 100);
  },
  distroyed() {}
};
</script>

<style scoped>
.more {
  cursor: pointer;
}

.container_list {
  margin-left: 25%;
  border: 1px black;
  height: 399px;
  background-color: transparent;
  overflow-y: scroll;
  max-height: 400px;
}

.container_search {
  margin-left: 33%;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
