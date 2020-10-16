<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      item-key="name"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Numero",
          aling: "start",
          value: "numero",
        },
        {
          text: "Remitente",
          value: "remitente",
        },
        {
          text: "Destinatario",
          value: "destinatario",
        },
        {
          text: "Cantidad",
          value: "cantidad",
        },
        {
          text: "Descripcion",
          value: "descripcion",
        },
        {
          text: "Importe",
          value: "importe",
        },
      ],
      items: [
        {
          numero: "1",
          remitente:'Zulma Constantino',
          destinatario: 'Mirta Armesto',
          cantidad: '20',
          descripcion: 'Cajas',
          importe: '$ 2500'
        },
        {
          numero: "1",
          remitente:'Refans Rosario',
          destinatario: 'Palermo',
          cantidad: '10',
          descripcion: 'Cajas',
          importe: '$ 1500'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
