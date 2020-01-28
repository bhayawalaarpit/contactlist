<template>
  <b-container>
    <div class="card">
      <b-form class="card-body" @submit.prevent="onSubmit">
        <div class="h4 text-center mb-4 ">{{ contact.title }}</div>
        <hr />
        <div class="d-flex flex-column justify-content-center mb-4">
          <div class="form-group m-auto">
            <input
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              @change="handleFile"
              :disabled="!editMode"
              hidden
            />
            <label for="file" class="d-block mb-0">
              <div id="img-container" class="rounded-circle">
                <div
                  id="file-viewer"
                  class="position-absolute rounded-circle"
                ></div>
                <button
                  type="button"
                  id="clear"
                  class="d-none"
                  @click="clearFile"
                >
                  ✕
                </button>
              </div>
            </label>
          </div>
        </div>
        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              type="text"
              id="firstname"
              placeholder="First Name "
              class="form-control"
              :class="{ 'is-invalid': $v.contact.firstname.$error }"
              v-b-tooltip.left="'Required Field'"
              v-model="contact.firstname"
              @blur="$v.contact.firstname.$touch()"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="
                !$v.contact.firstname.required && $v.contact.firstname.$error
              "
            >
              Name is required
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.firstname.alpha"
            >
              First Name shoud not allowd any <b> Space Characters</b>,
              <b>Numeric Characters</b> and
              <b>Special Characters</b>
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.firstname.minLength"
            >
              Name is required atlist
              {{ $v.contact.firstname.$params.minLength.min }} characters
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              type="text"
              :class="{ 'is-invalid': $v.contact.lastname.$error }"
              title="Last Name"
              id="lastname"
              placeholder="Last Name"
              class="form-control"
              @blur="$v.contact.lastname.$touch()"
              v-model="contact.lastname"
              :disabled="!editMode"
            />
            <p v-if="!$v.contact.lastname.minLength">
              Last Name is requires atlist
              {{ $v.contact.lastname.$params.minLength.min }} characters
            </p>
            <p v-if="!$v.contact.lastname.maxLength">
              Last Name is not allowed more then
              {{ $v.contact.lastname.$params.maxLength.max }} characters
            </p>
          </div>
        </b-row>
        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.company.$error }"
              type="text"
              title="Company"
              id="company"
              name="company"
              placeholder="Company"
              class="form-control"
              @blur="$v.contact.company.$touch()"
              v-model="contact.company"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.company.minLength"
            >
              Company is requires atlist
              {{ $v.contact.company.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.company.maxLength"
            >
              Company is not allowed more then
              {{ $v.contact.company.$params.maxLength.max }} characters
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.email.$error }"
              type="email"
              v-b-tooltip.left="'Required Field'"
              name="email"
              id="email"
              placeholder="Email"
              class="form-control"
              @blur="$v.contact.email.$touch()"
              v-model="contact.email"
              :disabled="!editMode"
            />

            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.email.required && $v.contact.email.$error"
            >
              Email is required
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.email.email"
            >
              Email is not Valid
            </p>
          </div>
        </b-row>

        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.mobilenumber.$error }"
              type="text"
              v-b-tooltip.left="'Required Field'"
              name="mobilenumber"
              id="mobilenumber"
              placeholder="Mobile Number"
              class="form-control"
              @blur="$v.contact.mobilenumber.$touch()"
              v-model="contact.mobilenumber"
              :disabled="!editMode"
            />

            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.mobilenumber.numeric"
            >
              Mobile Number is not Valid
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="
                !$v.contact.mobilenumber.required &&
                  $v.contact.mobilenumber.$error
              "
            >
              Mobile Number must be required
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.mobilenumber.minVal"
            >
              Mobile Number is must 10 degits only
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.mobilenumber.maxVal"
            >
              Mobile Number is must 10 degits only
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.work.$error }"
              type="text"
              title="Work"
              id="work"
              name="work"
              placeholder="Work"
              class="form-control"
              @blur="$v.contact.work.$touch()"
              v-model="contact.work"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.work.minLength"
            >
              Work is requires atlist
              {{ $v.contact.work.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.work.maxLength"
            >
              Work is not allowed more then
              {{ $v.contact.work.$params.maxLength.max }} characters
            </p>
          </div>
        </b-row>

        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.nickname.$error }"
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Nick Name"
              class="form-control"
              @blur="$v.contact.nickname.$touch()"
              v-model="contact.nickname"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.nickname.minLength"
            >
              Nick-Name is requires atlist
              {{ $v.contact.nickname.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.nickname.maxLength"
            >
              Nick-Name is not allowed more then
              {{ $v.contact.nickname.$params.maxLength.max }} characters
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              type="date"
              id="birthdate"
              name="birthdate"
              class="form-control"
              v-model="contact.birthdate"
              :disabled="!editMode"
            />
          </div>
        </b-row>

        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.website.$error }"
              type="text"
              id="website"
              name="website"
              placeholder="Website"
              class="form-control"
              @blur="$v.contact.website.$touch()"
              v-model="contact.website"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.website.url"
            >
              Website is not Valid
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.contact.relation.$error }"
              type="text"
              title="Relation"
              id="relation"
              name="relation"
              placeholder="Relation"
              class="form-control"
              @blur="$v.contact.relation.$touch()"
              v-model="contact.relation"
              :disabled="!editMode"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.relation.minLength"
            >
              Relation is requires atlist
              {{ $v.contact.relation.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.relation.maxLength"
            >
              Relation is not allowed more then
              {{ $v.contact.relation.$params.maxLength.max }} characters
            </p>
          </div>
        </b-row>
        <b-row>
          <div class="col-12 col-md-12 form-group">
            <b-form-textarea
              :class="{ 'is-invalid': $v.contact.notes.$error }"
              id="notes"
              name="notes"
              title="Write Something About"
              class="form-control"
              rows="3"
              @blur="$v.contact.notes.$touch()"
              v-model="contact.notes"
              :disabled="!editMode"
            ></b-form-textarea>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.notes.minLength"
            >
              Notes is requires atlist
              {{ $v.contact.notes.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.contact.notes.maxLength"
            >
              Notes is not allowed more then
              {{ $v.contact.notes.$params.maxLength.max }} characters
            </p>
          </div>
        </b-row>
        <b-form-group class="m-auto">
          <b-col sm="12">
            <b-button
              title="Edit Contact"
              pill
              type="button"
              variant="success"
              class=" float-left"
              @click="onUpdateContact"
              :disabled="$v.$invalid && editMode"
            >
              {{ editMode ? "Update" : "Edit" }}

              <font-awesome-icon icon="user-edit" />
            </b-button>

            <b-button
              type="button"
              class=" float-right"
              variant="danger"
              pill
              @click="onDeleteContact"
              :disabled="editMode"
            >
              Delete <font-awesome-icon icon="trash-alt" />
            </b-button>
          </b-col>
        </b-form-group>
      </b-form>
    </div>
    <!-- /form -->
  </b-container>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  minValue,
  maxValue,
  alpha,
  url
} from "vuelidate/lib/validators";
import * as moment from "moment";
import { groupByName } from "../../functions";

export default {
  data() {
    return {
      id: this.$route.params.id,
      contact: {
        avatar: "",
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        title: "",
        mobilenumber: "",
        work: "",
        nickname: "",
        birthdate: "",
        website: "",
        relation: "",
        notes: "",
        show: false,
        title: ""
      },
      editMode: false
    };
  },
  created() {
    this.$store.dispatch("getContactDetails", this.id);
    setTimeout(() => {
      this.contact = this.$store.getters.contact;
      if (this.contact.birthdate) {
        this.contact.birthdate = moment(this.contact.birthdate).format(
          "YYYY-MM-DD"
        );
      }

      if (
        this.contact.avatar &&
        ![null, undefined, ""].includes(this.contact.avatar.trim())
      ) {
        document.querySelector(`#file-viewer`).style[
          "background-image"
        ] = `url(${this.contact.avatar})`;
      }
    }, 3000);
  },
  validations: {
    contact: {
      firstname: { alpha, required, minLength: minLength(3) },
      email: { required, email },
      company: { minLength: minLength(3), maxLength: maxLength(255) },
      lastname: { alpha, minLength: minLength(3), maxLength: maxLength(255) },
      mobilenumber: {
        required,
        numeric,
        minVal: minValue(999999999),
        maxVal: maxValue(9999999999)
      },
      work: { minLength: minLength(3), maxLength: maxLength(255) },
      nickname: { minLength: minLength(2), maxLength: maxLength(255) },
      website: { url },
      relation: { minLength: minLength(3), maxLength: maxLength(255) },
      notes: { minLength: minLength(3), maxLength: maxLength(255) }
    }
  },

  methods: {
    onUpdateContact() {
      if (this.editMode === false) return void (this.editMode = true);
      console.log("Data", this.contact);
      this.$store.dispatch("updateContactDetalis", this.contact);
      // this.$store.dispatch("getAllContact");
      setTimeout(() => {
        this.contactList = groupByName(this.$store.getters.contacts);
        this.$router.push({ name: "ListContact" });
      }, 100);
    },
    onDeleteContact() {
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          console.log(value);
          if (value) {
            this.$store.dispatch("deleteContact");
            this.$router.push({ name: "ListContact" });
          } else {
            console.log("canceled");
          }

          // this.boxTwo = value
        })
        .catch(err => {
          console.log("canceled");
          // An error occurred
        });
    },
    handleFile({ target }) {
      const { files } = target;
      const { name } = files["0"];
      if (files["0"] instanceof File && files["0"].size <= 61440) {
        const reader = new FileReader();
        reader.readAsDataURL(files["0"]);

        reader.onload = ({ target: { result } }) => {
          this.contact.avatar = result;
          document.querySelector(`#file-viewer`).classList.add("bg-secondary");
          document.querySelector(`#file-viewer`).style[
            "background-image"
          ] = `url(${result})`;
          document.querySelector("#clear").classList.remove("d-none");
        };
      } else {
        this.editMode = false;
        console.log("Invalid Image");
      }
    },
    clearFile() {
      this.avatar = "";
      document.querySelector("#file").value = "";
      document.querySelector("#clear").classList.add("d-none");
      document.querySelector(`#file-viewer`).classList.remove("bg-secondary");
      document.querySelector(`#file-viewer`).style["background-image"] = `none`;
    }
  }
};
</script>

<style lang="scss" scoped>
#img-container {
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 25%;
  background-image: url("https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg");
  background-size: cover;
  &::after {
    position: absolute;
    content: "＋";
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    top: 75%;
    left: 75%;
    color: #ffff;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    background: var(--secondary);
  }
}
#file-viewer {
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  max-height: 100%;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
#clear {
  position: absolute;
  border-radius: 50%;
  border: none;
  height: 3rem;
  width: 3rem;
  top: 75%;
  left: 75%;
  color: var(--white);
  font-size: 1.65rem;
  line-height: 2.5rem;
  text-align: center;
  background: var(--secondary);
  z-index: 1;
}
</style>
