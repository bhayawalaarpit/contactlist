<template>
  <b-container>
    <div class="card">
      <b-form class="card-body" @submit.prevent="onSubmit">
        <div class="h4 text-center mb-4 ">New Contact</div>
        <hr />
        <div class="d-flex flex-column justify-content-center mb-4">
          <div class="form-group m-auto">
            <input
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              @change="handleFile"
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
              name="firstname"
              placeholder="First Name"
              class="form-control"
              :class="{ 'is-invalid': $v.firstname.$error }"
              v-b-tooltip.left="'Required Field'"
              v-model.trim="firstname"
              @blur="$v.firstname.$touch()"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.firstname.required && $v.firstname.$error"
            >
              Name is required
            </p>
            <p class="invalid-feedback d-block m-0" v-if="!$v.firstname.alpha">
              First Name shoud not allowd any <b> Space Characters</b>,
              <b>Numeric Characters</b> and <b>Special Characters</b>
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.firstname.minLength"
            >
              Name is required atlist
              {{ $v.firstname.$params.minLength.min }} characters
            </p>
          </div>

          <div class="col-12 col-md-6 form-group">
            <b-form-input
              type="text"
              :class="{ 'is-invalid': $v.lastname.$error }"
              title="Last Name"
              name="lastname"
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
            <p class="invalid-feedback d-block m-0" v-if="!$v.lastname.alpha">
              Last Name shoud not allowd any <b> Space Characters</b>,
              <b>Numeric Characters</b> and <b>Special Characters</b>
            </p>
          </div>
        </b-row>
        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.company.$error }"
              type="text"
              title="Company"
              id="company"
              name="company"
              placeholder="Company"
              class="form-control"
              @blur="$v.company.$touch()"
              v-model="company"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.company.minLength"
            >
              Company is requires atlist
              {{ $v.company.$params.minLength.min }} characters
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.company.maxLength"
            >
              Company is not allowed more then
              {{ $v.company.$params.maxLength.max }} characters
            </p>
          </div>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.email.$error }"
              type="email"
              v-b-tooltip.left="'Required Field'"
              name="email"
              id="email"
              placeholder="Email"
              class="form-control"
              @blur="$v.email.$touch()"
              v-model="email"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.email.required && $v.email.$error"
            >
              Email is required
            </p>
            <p class="invalid-feedback d-block m-0" v-if="!$v.email.email">
              Email is not Valid
            </p>
          </div>
        </b-row>
        <b-row>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.mobilenumber.$error }"
              type="text"
              v-b-tooltip.left="'Required Field'"
              name="mobilenumber"
              id="mobilenumber"
              placeholder="Mobile Number"
              class="form-control"
              @blur="$v.mobilenumber.$touch()"
              v-model="mobilenumber"
            />
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.mobilenumber.numeric"
            >
              Mobile Number is not Valid
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.mobilenumber.required && $v.mobilenumber.$error"
            >
              Mobile Number must be required
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.mobilenumber.minVal"
            >
              Mobile Number is must 10 digits only
            </p>
            <p
              class="invalid-feedback d-block m-0"
              v-if="!$v.mobilenumber.maxVal"
            >
              Mobile Number is must 10 digits only
            </p>
          </div>
          <div class="col-12 col-md-6 form-group">
            <b-form-input
              :class="{ 'is-invalid': $v.work.$error }"
              type="text"
              title="Work"
              id="work"
              name="work"
              placeholder="Work"
              class="form-control"
              @blur="$v.work.$touch()"
              v-model="work"
            />
            <p class="invalid-feedback d-block m-0" v-if="!$v.work.minLength">
              Work is requires atlist
              {{ $v.work.$params.minLength.min }} characters
            </p>
            <p class="invalid-feedback d-block m-0" v-if="!$v.work.maxLength">
              Work is not allowed more then
              {{ $v.work.$params.maxLength.max }} characters
            </p>
          </div>
        </b-row>
        <div v-if="show">
          <b-row>
            <div class="col-12 col-md-6 form-group">
              <b-form-input
                :class="{ 'is-invalid': $v.nickname.$error }"
                type="text"
                title="Nick Name"
                id="nickname"
                name="nickname"
                placeholder="Nick Name"
                class="form-control"
                @blur="$v.nickname.$touch()"
                v-model="nickname"
              />
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.nickname.minLength"
              >
                Nick-Name is requires atlist
                {{ $v.nickname.$params.minLength.min }} characters
              </p>
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.nickname.maxLength"
              >
                Nick-Name is not allowed more then
                {{ $v.nickname.$params.maxLength.max }} characters
              </p>
            </div>
            <div class="col-12 col-md-6 form-group">
              <b-form-input
                type="date"
                title="Birth Date"
                id="birthdate"
                name="birthdate"
                class="form-control"
                v-model="birthdate"
              />
            </div>
          </b-row>
          <b-row>
            <div class="col-12 col-md-6 form-group">
              <b-form-input
                :class="{ 'is-invalid': $v.website.$error }"
                type="text"
                title="Website"
                id="website"
                name="website"
                placeholder="Website"
                class="form-control"
                @blur="$v.website.$touch()"
                v-model="website"
              />
              <p class="invalid-feedback d-block m-0" v-if="!$v.website.url">
                Website is not Valid
              </p>
            </div>
            <div class="col-12 col-md-6 form-group">
              <b-form-input
                :class="{ 'is-invalid': $v.relation.$error }"
                type="text"
                title="Relation"
                id="relation"
                name="relation"
                placeholder="Relation"
                class="form-control"
                @blur="$v.relation.$touch()"
                v-model="relation"
              />
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.relation.minLength"
              >
                Relation is requires atlist
                {{ $v.relation.$params.minLength.min }} characters
              </p>
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.relation.maxLength"
              >
                Relation is not allowed more then
                {{ $v.relation.$params.maxLength.max }} characters
              </p>
            </div>
          </b-row>
          <b-row>
            <div class="col-12 col-md-12 form-group">
              <b-form-textarea
                :class="{ 'is-invalid': $v.notes.$error }"
                id="notes"
                name="notes"
                title="Write Something About"
                class="form-control"
                rows="3"
                @blur="$v.notes.$touch()"
                v-model="notes"
              ></b-form-textarea>
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.notes.minLength"
              >
                Relation is requires atlist
                {{ $v.notes.$params.minLength.min }} characters
              </p>
              <p
                class="invalid-feedback d-block m-0"
                v-if="!$v.notes.maxLength"
              >
                Relation is not allowed more then
                {{ $v.notes.$params.maxLength.max }} characters
              </p>
            </div>
          </b-row>
        </div>
        <b-form-group class="m-auto">
          <b-button
            title="Less Details"
            class="float-left"
            type="button"
            variant="secondary"
            pill
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
      </b-form>
    </div>
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
    };
  },
  validations: {
    firstname: { required, alpha, minLength: minLength(3) },
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
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("saveContact", this.$data);
      this.$router.push({ name: "ListContact" });
    },
    handleFile({ target }) {
      const { files } = target;
      const { name } = files["0"];

      if (files["0"] instanceof File && files["0"].size <= 61440) {
        const reader = new FileReader();
        reader.readAsDataURL(files["0"]);

        reader.onload = ({ target: { result } }) => {
          this.avatar = result;
          document.querySelector(`#file-viewer`).classList.add("bg-secondary");
          document.querySelector(`#file-viewer`).style[
            "background-image"
          ] = `url(${result})`;
          document.querySelector("#clear").classList.remove("d-none");
        };
      } else {
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
