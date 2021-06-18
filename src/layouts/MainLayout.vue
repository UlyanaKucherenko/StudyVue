<template>
  <div>
    <div>
      <Navbar />
      <Sidebar />
      <main class="content">
        <div class="page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default {
  name: "MainLayout",
  components: {Sidebar, Navbar}
}
</script>

<style scoped>

</style>