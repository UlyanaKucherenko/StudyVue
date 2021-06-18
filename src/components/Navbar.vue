<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__content">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link to="/" class="navbar__item-link">
              Home
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/slider" class="navbar__item-link">
              Slider
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/landing" class="navbar__item-link">
              Landing
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss">
.navbar {
  background-color: antiquewhite;
}

</style>