<template>
  <div>
    <head>
      <title>ABCD</title>
    </head>
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view class="body_part"></router-view>
    </transition>
    <!-- <app-savecontact></app-savecontact> -->
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  components: { appHeader: Header },
  watch: {
    $route: {
      handler: (to, from) => {
        console.log("Too", to);
        document.title = to.meta.title;
      },
      immediate: true
    }
  }
};
</script>

<style>
.body_part {
  padding-top: 5%;
}
.slide-enter-active {
  animation: slide-in 500ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 500ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(2);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
