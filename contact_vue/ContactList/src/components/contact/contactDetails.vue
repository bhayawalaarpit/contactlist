<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
      <b-col sm="6" class="container_form">
        <div class="text-center">
          <b-img
            src="https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg"
            class="profile"
          />
          <h2 class="text-center">{{ contact.title }}</h2>
          <b-form-group>
            <b-row>
            <b-col sm="6" :class="{ invalid: $v.contact.firstname.$error }">
              <b-form-input
                type="text"
                id="name"
                placeholder="First Name "
                class="form-control"
                @blur="$v.contact.firstname.$touch()"
                v-model="contact.firstname"
                :disabled="!editMode"
              />
              <p
                class="error"
                v-if="
                  !$v.contact.firstname.required && $v.contact.firstname.$error
                "
              >
                Name is required
              </p>
              <p class="error" v-if="!$v.contact.firstname.minLength">
                Name is required atlist
                {{ $v.contact.firstname.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.firstname.alpha">
                First Name shoud not allowd any <b> Space Characters</b>,
                <b>Numeric Characters</b> and
                <b>Special Characters</b>
              </p>
            </b-col>

            <b-col sm="6" :class="{ invalid: $v.contact.lastname.$error }">
              <b-form-input
                type="text"
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
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
            <b-col sm="6" :class="{ invalid: $v.contact.company.$error }">
              <b-form-input
                type="text"
                id="company"
                placeholder="Company"
                class="form-control"
                @blur="$v.contact.company.$touch()"
                v-model="contact.company"
                :disabled="!editMode"
              />
              <p class="error" v-if="!$v.contact.company.minLength">
                Company is requires atlist
                {{ $v.contact.company.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.company.maxLength">
                Company is not allowed more then
                {{ $v.contact.company.$params.maxLength.max }} characters
              </p>
            </b-col>

            <b-col sm="6" :class="{ invalid: $v.contact.email.$error }">
              <b-form-input
                type="email"
                id="email"
                placeholder="Email"
                class="form-control"
                @blur="$v.contact.email.$touch()"
                v-model="contact.email"
                :disabled="!editMode"
              />

              <p
                class="error"
                v-if="!$v.contact.email.required && $v.contact.email.$error"
              >
                Email is required
              </p>
              <p class="error" v-if="!$v.contact.email.email">
                Email is not Valid
              </p>
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
            <b-col sm="6" :class="{ invalid: $v.contact.mobilenumber.$error }">
              <b-form-input
                type="text"
                id="mobilenumber"
                placeholder="Mobile Number"
                class="form-control"
                @blur="$v.contact.mobilenumber.$touch()"
                v-model="contact.mobilenumber"
                :disabled="!editMode"
              />

              <p class="error" v-if="!$v.contact.mobilenumber.numeric">
                Mobile Number is not Valid
              </p>
              <p
                class="error"
                v-if="
                  !$v.contact.mobilenumber.required &&
                    $v.contact.mobilenumber.$error
                "
              >
                Mobile Number must be required
              </p>
              <p class="error" v-if="!$v.contact.mobilenumber.minVal">
                Mobile Number is must 10 degits only
              </p>
              <p class="error" v-if="!$v.contact.mobilenumber.maxVal">
                Mobile Number is must 10 degits only
              </p>
            </b-col>

            <b-col sm="6" :class="{ invalid: $v.contact.work.$error }">
              <b-form-input
                type="text"
                id="work"
                placeholder="Work"
                class="form-control"
                @blur="$v.contact.work.$touch()"
                v-model="contact.work"
                :disabled="!editMode"
              />
              <p class="error" v-if="!$v.contact.work.minLength">
                Work is requires atlist
                {{ $v.contact.work.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.work.maxLength">
                Work is not allowed more then
                {{ $v.contact.work.$params.maxLength.max }} characters
              </p>
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
            <b-col sm="6" :class="{ invalid: $v.contact.nickname.$error }">
              <b-form-input
                type="text"
                id="nickname"
                placeholder="Nick Name"
                class="form-control"
                @blur="$v.contact.nickname.$touch()"
                v-model="contact.nickname"
                :disabled="!editMode"
              />
              <p class="error" v-if="!$v.contact.nickname.minLength">
                Nick-Name is requires atlist
                {{ $v.contact.nickname.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.nickname.maxLength">
                Nick-Name is not allowed more then
                {{ $v.contact.nickname.$params.maxLength.max }} characters
              </p>
            </b-col>

            <b-col sm="6">
              <b-form-input
                type="date"
                id="birthdate"
                class="form-control"
                v-model="contact.birthdate"
                :disabled="!editMode"
              />
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
            <b-col sm="6" :class="{ invalid: $v.contact.website.$error }">
              <b-form-input
                type="text"
                id="website"
                placeholder="Website"
                class="form-control"
                @blur="$v.contact.website.$touch()"
                v-model="contact.website"
                :disabled="!editMode"
              />
              <p class="error" v-if="!$v.contact.website.url">
                Website is not Valid
              </p>
            </b-col>

            <b-col sm="6" :class="{ invalid: $v.contact.relation.$error }">
              <b-form-input
                type="text"
                id="relation"
                placeholder="Relation"
                class="form-control"
                @blur="$v.contact.relation.$touch()"
                v-model="contact.relation"
                :disabled="!editMode"
              />
              <p class="error" v-if="!$v.contact.relation.minLength">
                Relation is requires atlist
                {{ $v.contact.relation.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.relation.maxLength">
                Relation is not allowed more then
                {{ $v.contact.relation.$params.maxLength.max }} characters
              </p>
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
            <b-col sm="12" :class="{ invalid: $v.contact.notes.$error }">
              <b-form-textarea
                id="notes"
                class="form-control"
                rows="3"
                @blur="$v.contact.notes.$touch()"
                v-model="contact.notes"
                :disabled="!editMode"
              ></b-form-textarea>
              <p class="error" v-if="!$v.contact.notes.minLength">
                Notes is requires atlist
                {{ $v.contact.notes.$params.minLength.min }} characters
              </p>
              <p class="error" v-if="!$v.contact.notes.maxLength">
                Notes is not allowed more then
                {{ $v.contact.notes.$params.maxLength.max }} characters
              </p>
            </b-col>
            </b-row>
          </b-form-group>

          <b-form-group class="center">
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
            </b-row>
          </b-form-group>
        </div>
      </b-col>
    </b-form>
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
      contact: [],
      contactList: [],
      editMode: false
    };
  },
  created() {
    setTimeout(() => {
      this.contact = this.$store.getters.contact;
      if (this.contact.birthdate) {
        this.contact.birthdate = moment(this.contact.birthdate).format(
          "YYYY-MM-DD"
        );
      }
    }, 200);
    return this.$store.dispatch("getContactDetails", this.id);
  },
  validations: {
    contact: {
      firstname: {
        alpha,
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      company: {
        minLength: minLength(3),
        maxLength: maxLength(255)
      },
      lastname: {
        alpha,
        minLength: minLength(3),
        maxLength: maxLength(255)
      },
      mobilenumber: {
        required,
        numeric,
        minVal: minValue(999999999),
        maxVal: maxValue(9999999999)
      },
      work: {
        minLength: minLength(3),
        maxLength: maxLength(255)
      },
      nickname: {
        minLength: minLength(2),
        maxLength: maxLength(255)
      },
      website: { url },
      relation: {
        minLength: minLength(3),
        maxLength: maxLength(255)
      },
      notes: {
        minLength: minLength(3),
        maxLength: maxLength(255)
      }
    }
  },

  methods: {
    onUpdateContact() {
      if (this.editMode === false) {
        this.editMode = true;
        return;
      } else {
        const formData = {
          firstname: this.contact.firstname,
          lastname: this.contact.lastname,
          email: this.contact.email,
          company: this.contact.company,
          title: this.contact.firstname + " " + this.contact.lastname,
          mobilenumber: this.contact.mobilenumber,
          work: this.contact.work,
          nickname: this.contact.nickname,
          birthdate: this.contact.birthdate,
          website: this.contact.website,
          relation: this.contact.relation,
          notes: this.contact.notes
        };

        this.$store.dispatch("updateContactDetalis", formData);
        // this.$store.dispatch("getAllContact");
        setTimeout(() => {
          this.contactList = groupByName(this.$store.getters.contacts);
          this.$router.push({ name: "ListContact" });
        }, 100);
      }
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
    }
  }
};
</script>

<style scoped>
.center {
  margin: auto;
}

.profile {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.invalid input {
  border: 3px solid red;
  background-color: #ffc9aa;
}

.invalid textarea {
  border: 5px solid red;
  background-color: #ffc9aa;
}

.error {
  color: red;
}
.invalid textarea {
  border: 5px solid red;
  background-color: #ffc9aa;
}

.container_form {
  margin-left: 25%;
  margin-bottom: 5%;
  border: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
