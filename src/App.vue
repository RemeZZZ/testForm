<template>
  <div id="app">

    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm'

export default {
  name: 'App',
  components: {
    RegistrationForm
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
</style>
