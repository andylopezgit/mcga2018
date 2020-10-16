<template fluid>
  <v-container class="justify-center">
    <v-form class="pt-10 justify-center">
      <v-card elevation="4" class="mx-auto pa-5 justify-center" max-width="800">
        <v-card-title primary-title>
          Remito
        </v-card-title>
        <v-row>
          <v-col cols="5">
            <v-text-field name="numeroR" label="Remito N°"></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field name="fecha" label="Fecha"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn color="success" @click.stop="dialog = true"> Fecha</v-btn>
          </v-col>
          <v-dialog v-model="dialog" max-width="500px">
            <v-date-picker v-model="picker"></v-date-picker>
          </v-dialog>
        </v-row>
        <v-row align="center">
          <v-col cols="5">
            <v-select
              prepend-icon="mdi-map"
              :items="clientes"
              label="Remitente"
            >
            </v-select>
          </v-col>
          <v-col cols="5">
            <v-select
              prepend-icon="mdi-map"
              :items="ciudades"
              label="Localidad"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-btn class="warning">+</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="5">
            <v-select
              prepend-icon="mdi-map"
              :items="clientes"
              label="Destinatario"
            ></v-select>
          </v-col>
          <v-col cols="5">
            <v-select
              prepend-icon="mdi-map"
              :items="ciudades"
              label="Localidad"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-btn class="warning">+</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="5">
            <v-select
              prepend-icon="mdi-map"
              :items="detalle"
              label="Detalle"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="cantidad" label="Cantindad"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn class="warning" v-on:click="sumar"
              ><v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn color="primary" v-on:click="restar"
              ><v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="secondary">Guardar</v-btn>
          </v-col>
          <v-col>
            <v-btn color="success">Imprimir</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      cantidad: 0,

      picker: new Date().toISOString().substr(0, 10),

      dialog: false,

      ciudades: ["Rosario", "Capital Federal", "Provincia Bs As", "Cordoba"],

      detalle: ["Sobre", "Cajas", "Caja", "Bolsa", "Bulto", "Paquete"],
      clientes: [
        "Mirta Armesto",
        "Zulma Constatino",
        "Unimog Ros",
        "Unimog Capital",
      ],
    };
  },
  methods: {
    sumar() {
      this.cantidad += 1;
    },
    restar() {
      this.cantidad -= 1;
    },
  },
};
</script>
