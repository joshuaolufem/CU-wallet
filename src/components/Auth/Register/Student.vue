<template lang="html">
  <form class="row g-3">
    <div class="text-center">
      <h3>Student Sign-up</h3>
      <p>Are you are Service Provider? <router-link to="/auth/register/service-provider">Register here</router-link></p>
    </div>
    <div class="col-md-6">
      <label class="form-label">First Name</label>
      <input type="text" class="form-control" placeholder="Joshua" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-control" placeholder="Olufemi" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Matric Number</label>
      <input type="text" class="form-control" placeholder="Matric No." required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Level</label>
      <select class="form-select" aria-label="Default select example">
        <option selected disabled>Choose Level</option>
        <option v-for="level in levels" :key="level.index" :value="level">
          {{ level + ' Level'}}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label class="form-label">Course</label>
      <select class="form-select" aria-label="Default select example">
        <option selected disabled>Choose Course</option>
        <option v-for="course in courses" :key="course.index">
          {{ course }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" placeholder="joshuaolufemi@email.com" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="password" required>
    </div>
    <div class="col-md-6">
      <label class="form-label">Confirm Password</label>
      <input type="password" class="form-control" placeholder="confirm password" required>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          I agree to the <a href="#">Terms</a> & <a href="#">Conditions</a> of E-Wallet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </label>
      </div>
    </div>
    <div class="col-12 text-center">
      <button type="submit" class="btn btn-outline-dark btn-general mb-3">Register</button>
      <p>Already have an account? <router-link to="/auth/login">Sign in</router-link></p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Student',
  data: () => ({
    levels: ['100', '200', '300', '400', '500'],
    selectedLevel: '',
    courses: [
      'ACCOUNTING',
      'ARCHITECTURE',
      'BANKING AND FINANCE',
      'BIOCHEMISTRY',
      'BIOLOGY',
      'BUILDING TECHNOLOGY',
      'BUSINESS ADMINISTRATION',
      'CHEMICAL ENGINEERING',
      'CIVIL ENGINEERING',
      'COMPUTER ENGINEERING',
      'COMPUTER SCIENCE',
      'DEMOGRAPHY AND SOCIAL STATISTICS',
      'ECONOMICS',
      'ELECTRICAL/ELECTRONICS ENGINEERING',
      'ENGLISH LANGUAGE',
      'ENTREPRENEURSHIP',
      'ESTATE MANAGEMENT',
      'FRENCH',
      'INDUSTRIAL RELATIONS',
      'INDUSTRIAL CHEMISTRY',
      'INDUSTRIAL MATHEMATICS',
      'INDUSTRIAL PHYSICS WITH APPLIED GEOPHYSICS',
      'INDUSTRIAL PHYSICS WITH ELECTRONICS AND IT APPLICATION',
      'INDUSTRIAL PHYSICS'
    ],
    selected: ''
  })
}
</script>

<style lang="css" scoped>
</style>
