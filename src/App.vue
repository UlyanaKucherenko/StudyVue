<template>
  <div class="app">
    <MainLayout >
      <router-view/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name:"app",
  components: {MainLayout},
}
</script>

<style lang="scss">

</style>
