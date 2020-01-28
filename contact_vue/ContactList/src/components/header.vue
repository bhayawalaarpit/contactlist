<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
      <a> Contact Manager </a>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/new" title="New Contact">
          <font-awesome-icon icon="user-plus" class="icon" />
        </b-nav-item>

        <b-nav-item href="/" title="All Contact">
          <font-awesome-icon icon="address-book" class="icon" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.icon {
  font-size: 20x;
  color: cyan;
}
</style>
