<template lang="html">
  <form class="row g-3">
    <div class="text-center">
      <h3>Service Provider Sign-up</h3>
      <p>Are you are Student? <router-link to="/auth/register/student">Register here</router-link></p>
    </div>
    <div class="col-md-6">
      <label class="form-label">Company Name</label>
      <input type="text" class="form-control" placeholder="Chicken Republic" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Business Owner</label>
      <input type="text" class="form-control" placeholder="Olufemi Joshua" required>
    </div>
    <div class="col-md-4">
      <label for="formFile" class="form-label">Logo</label>
      <input class="form-control" type="file" id="formFile" required>
    </div>
    <div class="col-md-4">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" placeholder="joshuaolufemi@email.com" required>
    </div>
    <div class="col-md-4">
      <label class="form-label">Phone Number</label>
      <input type="number" class="form-control" placeholder="Phone number" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="password" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Confirm Password</label>
      <input type="password" class="form-control" placeholder="confirm password" required>
    </div>
    <div class="col-12 text-center">
      <button type="submit" class="btn btn-outline-dark btn-general mt-2 mb-3">Register</button>
      <p>Already have an account? <router-link to="/auth/login">Sign in</router-link></p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ServiceProvider'
}
</script>

<style lang="css" scoped>
</style>
