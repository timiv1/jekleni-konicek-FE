<template>
  <v-row justify="center" align="center">
    <v-col
      cols="6"
      fill-height
      style="height: 100%"
      class="d-flex scaling-container"
    >
      <v-card style="height: 100%" class="flex-grow-1">
        <v-card-title>Uporabnik</v-card-title>
        <v-card-text
          >Prijavite se v naš sistem in izvedite online naročila na servis ali
          tehnični pregled.</v-card-text
        >
        <v-card-actions>
          <v-btn outlined color="success">prijava</v-btn>
          <v-btn outlined color="secondary">registracija</v-btn>
          <!-- <v-btn @click="test">auth</v-btn> -->
        </v-card-actions>
      </v-card>
      <!-- <v-btn @click="$auth.loginWith('auth0')">nadaljuj kot uporabnik</v-btn>
      <v-btn @click="$auth.loginWith('auth0')">prijava</v-btn> -->

      <v-btn @click="getOsnutek">api osnutek</v-btn>
      <v-btn @click="test">get token</v-btn>
    </v-col>
    <v-col
      cols="6"
      class="scaling-container d-flex"
      fill-height
      style="height: 100%"
    >
      <v-card class="flex-grow-1 grow">
        <v-card-title>Zaposlen</v-card-title>

        <v-card-text> Prijavite se kot zaposleni </v-card-text>

        <v-card-actions>
          <v-btn outlined color="success" @click="login">prijava</v-btn>
          <v-btn to="/delavec">delavec</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
      {{ msg }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      msg: null,
      mail: null,
      geslo: null,
    }
  },
  methods: {
    async getOsnutek() {
      const obj = await this.$regApi.$get('osnutek')
      this.msg = obj
    },
    test() {
      console.log(
        this.$auth.strategies.auth0.token.$storage._state['_token.auth0']
      )
    },
    async login() {
      await this.$auth.loginWith('auth0')
    },
  },
}
</script>
<style scoped>
.scaling-container {
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}
</style>
