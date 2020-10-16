<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            Remitos
            <router-link to="/remitos">Remitos</router-link>
          </v-tab>
          <v-tab>
            Clientes
            <router-link to="/abmclientes">Clientes</router-link>
          </v-tab>
          <v-tab>
            Listar
            <router-link to="/listar">Listar</router-link>
          </v-tab>
          <v-tab>
            Configuracion
            <router-link to="/configuracion">configuracion</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
