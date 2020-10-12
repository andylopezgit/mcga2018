<template>
  <div class="home">
    <Presentacion msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentacion from "../components/Presentacion.vue";

export default {
  name: "Home",
  components: {
    Presentacion
  }
};
</script>
