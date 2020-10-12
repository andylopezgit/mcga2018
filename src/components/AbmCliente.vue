<template lang="">
  <v-container fluid>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card elevation="10">
          <v-card-title primary-title>
            ABM Clientes
          </v-card-title>
          <v-card-subtitle>Complete los campos</v-card-subtitle>
          <v-form class="pa-5">
            <v-row>
              <v-col cols="6">
                <v-text-field name="nombre" label="Nombre" id="id">
                </v-text-field>
              </v-col>
              <v-col  cols="4">
                <v-select
                  :items="localidades"
                  v-model="localidad"
                  label="Localidad"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-btn class="mx-2" fab dark color="indigo">
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-text-field
                  name="nombre"
                  label="Direccon"
                  id="id"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="nombre"
                  label="Telefono"
                  id="id"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-btn x-large class="mr-4 primary" @click="submit">
                  Guardar
                </v-btn>
                <v-btn x-large class="warning" @click="clear">
                  Borrar
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      localidad: "",
      localidades: [
        "Capital Federal",
        "Rosario",
        "Cordoba",
        "Provincia BA",
        "Marcos Juarez",
        "Oncativo",
      ],
    };
  },
};
</script>
