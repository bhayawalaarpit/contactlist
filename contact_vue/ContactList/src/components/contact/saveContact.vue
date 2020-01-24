<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
      <b-col class="container_form">
        <div class="text-center">
          <b-img
            src="https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg"
            class="profile"
          />
          <h2 class="text-center">New Contact</h2>
          <b-form-group>
            <b-row>
              <b-col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                :class="{ invalid: $v.firstname.$error }"
              >
                <b-form-input
                  type="text"
                  v-b-tooltip.left="'Required Field'"
                  id="firstname"
                  placeholder="First Name"
                  class="form-control"
                  @blur="$v.firstname.$touch()"
                  v-model.trim="firstname"
                >
                </b-form-input>
                <p
                  class="error"
                  v-if="!$v.firstname.required && $v.firstname.$error"
                >
                  Name is required
                </p>
                <p class="error" v-if="!$v.firstname.alpha">
                  First Name shoud not allowd any <b> Space Characters</b>,
                  <b>Numeric Characters</b> and
                  <b>Special Characters</b>
                </p>
                <p class="error" v-if="!$v.firstname.minLength">
                  Name is required atlist
                  {{ $v.firstname.$params.minLength.min }} characters
                </p>
              </b-col>

              <b-col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                :class="{ invalid: $v.lastname.$error }"
              >
                <b-form-input
                  type="text"
                  title="Last Name"
                  id="lastname"
                  placeholder="Last Name"
                  class="form-control"
                  @blur="$v.lastname.$touch()"
                  v-model="lastname"
                />
                <p v-if="!$v.lastname.minLength">
                  Title is requires atlist
                  {{ $v.lastname.$params.minLength.min }} characters
                </p>
                <p v-if="!$v.lastname.maxLength">
                  Title is not allowed more then
                  {{ $v.lastname.$params.maxLength.max }} characters
                </p>
                <p class="error" v-if="!$v.lastname.alpha">
                  Last Name shoud not allowd any <b> Space Characters</b>,
                  <b>Numeric Characters</b> and
                  <b>Special Characters</b>
                </p>
              </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <b-col sm="6" :class="{ invalid: $v.company.$error }">
                <b-form-input
                  type="text"
                  title="Company"
                  id="company"
                  placeholder="Company"
                  class="form-control"
                  @blur="$v.company.$touch()"
                  v-model="company"
                />
                <p class="error" v-if="!$v.company.minLength">
                  Company is requires atlist
                  {{ $v.company.$params.minLength.min }} characters
                </p>
                <p class="error" v-if="!$v.company.maxLength">
                  Company is not allowed more then
                  {{ $v.company.$params.maxLength.max }} characters
                </p>
              </b-col>

              <b-col sm="6" :class="{ invalid: $v.email.$error }">
                <b-form-input
                  type="email"
                  v-b-tooltip.left="'Required Field'"
                  id="email"
                  placeholder="Email"
                  class="form-control"
                  @blur="$v.email.$touch()"
                  v-model="email"
                />

                <p class="error" v-if="!$v.email.required && $v.email.$error">
                  Email is required
                </p>
                <p class="error" v-if="!$v.email.email">Email is not Valid</p>
              </b-col>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <b-col sm="6" :class="{ invalid: $v.mobilenumber.$error }">
                <b-form-input
                  type="text"
                  v-b-tooltip.left="'Required Field'"
                  id="mobilenumber"
                  placeholder="Mobile Number"
                  class="form-control"
                  @blur="$v.mobilenumber.$touch()"
                  v-model="mobilenumber"
                />

                <p class="error" v-if="!$v.mobilenumber.numeric">
                  Mobile Number is not Valid
                </p>
                <p
                  class="error"
                  v-if="!$v.mobilenumber.required && $v.mobilenumber.$error"
                >
                  Mobile Number must be required
                </p>
                <p class="error" v-if="!$v.mobilenumber.minVal">
                  Mobile Number is must 10 degits only
                </p>
                <p class="error" v-if="!$v.mobilenumber.maxVal">
                  Mobile Number is must 10 degits only
                </p>
              </b-col>

              <b-col sm="6" :class="{ invalid: $v.work.$error }">
                <b-form-input
                  type="text"
                  title="Work"
                  id="work"
                  placeholder="Work"
                  class="form-control"
                  @blur="$v.work.$touch()"
                  v-model="work"
                />
                <p class="error" v-if="!$v.work.minLength">
                  Work is requires atlist
                  {{ $v.work.$params.minLength.min }} characters
                </p>
                <p class="error" v-if="!$v.work.maxLength">
                  Work is not allowed more then
                  {{ $v.work.$params.maxLength.max }} characters
                </p>
              </b-col>
            </b-row>
          </b-form-group>

          <div v-if="show">
            <b-form-group>
              <b-row>
                <b-col sm="6" :class="{ invalid: $v.nickname.$error }">
                  <b-form-input
                    type="text"
                    title="Nick Name"
                    id="nickname"
                    placeholder="Nick Name"
                    class="form-control"
                    @blur="$v.nickname.$touch()"
                    v-model="nickname"
                  />
                  <p class="error" v-if="!$v.nickname.minLength">
                    Nick-Name is requires atlist
                    {{ $v.nickname.$params.minLength.min }} characters
                  </p>
                  <p class="error" v-if="!$v.nickname.maxLength">
                    Nick-Name is not allowed more then
                    {{ $v.nickname.$params.maxLength.max }} characters
                  </p>
                </b-col>

                <b-col sm="6">
                  <b-form-input
                    type="date"
                    title="Birth Date"
                    id="birthdate"
                    class="form-control"
                    v-model="birthdate"
                  />
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group>
              <b-row>
                <b-col sm="6" :class="{ invalid: $v.website.$error }">
                  <b-form-input
                    type="text"
                    title="Website"
                    id="website"
                    placeholder="Website"
                    class="form-control"
                    @blur="$v.website.$touch()"
                    v-model="website"
                  />
                  <p class="error" v-if="!$v.website.url">
                    Website is not Valid
                  </p>
                </b-col>

                <b-col :class="{ invalid: $v.relation.$error }">
                  <b-form-input
                    type="text"
                    title="Relation"
                    id="relation"
                    placeholder="Relation"
                    class="form-control"
                    @blur="$v.relation.$touch()"
                    v-model="relation"
                  />
                  <p class="error" v-if="!$v.relation.minLength">
                    Relation is requires atlist
                    {{ $v.relation.$params.minLength.min }} characters
                  </p>
                  <p class="error" v-if="!$v.relation.maxLength">
                    Relation is not allowed more then
                    {{ $v.relation.$params.maxLength.max }} characters
                  </p>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group>
              <b-row>
                <b-col sm="12" :class="{ invalid: $v.notes.$error }">
                  <b-form-textarea
                    id="notes"
                    title="Write Something About"
                    class="form-control"
                    rows="5"
                    @blur="$v.notes.$touch()"
                    v-model="notes"
                  ></b-form-textarea>
                  <p class="error" v-if="!$v.notes.minLength">
                    Relation is requires atlist
                    {{ $v.notes.$params.minLength.min }} characters
                  </p>
                  <p class="error" v-if="!$v.notes.maxLength">
                    Relation is not allowed more then
                    {{ $v.notes.$params.maxLength.max }} characters
                  </p>
                </b-col>
              </b-row>
            </b-form-group>
          </div>

          <b-form-group class="center">
            <b-button
              title="Less Details"
              pill
              class="float-left"
              type="button"
              variant="secondary"
              @click="show = !show"
              v-if="show"
            >
              Less Details <font-awesome-icon icon="minus" />
            </b-button>
            <b-button
              title="More Details"
              pill
              class="float-left"
              type="button"
              variant="secondary"
              @click="show = !show"
              v-else
            >
              MoreDetails <font-awesome-icon icon="plus" />
            </b-button>
            <b-button
              title="Save Contact"
              pill
              class="float-right"
              type="submit"
              variant="success"
              :disabled="$v.$invalid"
            >
              Save <font-awesome-icon icon="user-plus" />
            </b-button>
          </b-form-group>
        </div>
      </b-col>
    </b-form>
  </b-container>
</template>

<script>
// import header from "../header";

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
export default {
  data() {
    return {
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
    };
  },

  validations: {
    firstname: {
      required,
      alpha,
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
  },

  methods: {
    onSubmit() {
      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        company: this.company,
        title: this.firstname + " " + this.lastname,
        mobilenumber: this.mobilenumber,
        work: this.work,
        nickname: this.nickname,
        birthdate: this.birthdate,
        website: this.website,
        relation: this.relation,
        notes: this.notes
      };
      this.$store.dispatch("saveContact", formData);
      this.$router.push({ name: "ListContact" });
    }
  }
};
</script>

<style scoped>
.center {
  margin: auto;
}

.container_form {
  margin: auto;
  border: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5%;
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
</style>
