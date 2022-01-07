<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card-title></v-card-title>
      <v-btn outlined to="admin">admin</v-btn>
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
    }
  },
  methods: {
    async callApi() {
      const obj = await this.$axios.$get('http://localhost:8000/osnutek')
      this.msg = obj
    },
  },
}
</script>
