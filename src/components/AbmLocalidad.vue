<template fluid>
  <v-row class="justify-center">
    <v-col cols="4">
      <v-card elevation="20">
        <v-card-title primary-title>
          Ingrese Localidad
        </v-card-title>
        <v-form class="mx-auto pa-5 justify-center">
          <v-text-field
            name="ciudad"
            label="Nombre Ciudad"
            single-line
          ></v-text-field>
          <v-text-field
            name="provincia"
            label="Provincia"
            single-line
          ></v-text-field>
          <v-text-field
            name="codigo"
            label="Codigo Postal"
            single-line
          ></v-text-field>
                <v-btn x-large class="mr-4 primary" @click="submit">
                  Guardar
                </v-btn>
                <v-btn
                v-btn x-large class="mr-4 secondary" @click="clear">
                  Limpiar
                </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
