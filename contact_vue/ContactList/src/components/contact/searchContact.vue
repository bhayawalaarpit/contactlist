<template>
  <b-form-input
    type="search"
    class="form-control"
    placeholder="Search contact"
    v-model="search"
    @input="filteredContact"
  >
  </b-form-input>
</template>
<script>
import { groupByName } from "../../functions";
export default {
  data() {
    return {
      List: [],
      search: ""
    };
  },
  // props: {
  //   search: {
  //     type: String
  //   }
  // },
  methods: {
    filteredContact() {
      // this.search = this.props.search;
      console.log("search", this.search);
      // console.log("search: props", this.props.search);

      if (!this.$store) return;
      if (!this.$store.getters) return;
      if (!this.$store.getters.contacts) return;
      this.List =
        this.search === ""
          ? groupByName(this.$store.getters.contacts)
          : groupByName(
              this.$store.getters.contacts.filter(post =>
                post.firstname.toLowerCase().includes(this.search.toLowerCase())
              ),
              "Search"
            );
      this.$emit("contactData", this.List);
      this.$emit("searchData", this.search);
    }
  }
};
</script>
