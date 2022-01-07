<template>
  <v-row justify="center" align="center">
    <v-col cols="12"> <v-card-title> Upravljaj delavce </v-card-title></v-col>
    <v-btn outlined class="mr-4" @click="getDelavci">pridobi seznam</v-btn>
    <v-btn outlined @click="getDelovniCasi">pridobi delovne čase</v-btn>

    <span>{{ seznamDelavcev }}</span>
    <span>{{ delovniCasi }}</span>
    <admin-panel/>
    <v-col cols="12">
    </v-col>
  </v-row>
</template>

<script>
import AdminPanel from '../../components/admin/AdminPanel.vue'
export default {
  name: 'IndexPage',
  components: { AdminPanel  },
  data() {
    return {
      seznamDelavcev: null,
      delovniCasi: null,
    }
  },
  methods: {
    async getDelavci() {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get('GetDelavecs')
      this.seznamDelavcev = obj
    },
    async getDelovniCasi() {
      console.log('delovni casi')
      const obj = await this.$delCasApi.$get('GetDelovniCasi')
      this.delovniCasi = obj
    },
  },
}
</script>
