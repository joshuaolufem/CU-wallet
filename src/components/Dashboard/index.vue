<template lang="html">
  <section class="dashboard">
    <Navbar/>
    <div class="container-fluid p-0 d-flex">
      <Sidebar/>
      <router-view/>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="css" scoped>
</style>
