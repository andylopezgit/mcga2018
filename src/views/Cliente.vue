<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        <FormCliente/>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
import FormCliente from "../components/FormCliente.vue";

export default {
  name: "cliente",
  components: {
    FormCliente
  } 
}
</script>
