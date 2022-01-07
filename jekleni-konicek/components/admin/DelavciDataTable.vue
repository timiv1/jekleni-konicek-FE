<template>
  <v-data-table :items="seznamDelavcev" :headers="headers"> </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: 'ime', value: 'ime' },
        { text: 'priiemk', value: 'priimek' },
        { text: 'email', value: 'eamil' },
        { text: 'državljanstvo', value: 'drzavljanstvo' },
        { text: 'delovno mesto', value: 'delovnoMesto' },
        { text: 'urna postavka', value: 'urnaPostavka' },
      ],
      seznamDelavcev: [],
    }
  },
  async fetch() {
    await this.getDelavci()
  },
  methods: {
    async getDelavci() {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get('GetDelavecs')
      this.seznamDelavcev = obj
    },
    async getDelavecById(id) {
      // const obj = await this.$axios.$get(
      const obj = await this.$upDelApi.$get(`GetDelavecById/${id}`)
      this.seznamDelavcev = obj
    },
    async GetDelavecByDelovnoMesto(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `GetDelavecByDelovnoMesto/${delovnoMesto}`
      )
      this.seznamDelavcev = obj
    },
    async addDelavec(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `GetDelavecByDelovnoMesto/${delovnoMesto}`
      )
      this.seznamDelavcev = obj
    },
    async updateDelavecDelovnoMesto(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `UpdateDelavecDelovnoMesto/${delovnoMesto}`
      )
      this.seznamDelavcev = obj
    },
    async updateDelavecUrnaPostavka(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$post(`UpdateDelavecUrnaPostavka/${id}`)
      this.seznamDelavcev = obj
    },
    async updateDelavecMulti(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(`UpdateDelavec/${id}`)
      this.seznamDelavcev = obj
    },
    async deleteDelavec(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(`DeleteDelavec/${id}`)
      this.seznamDelavcev = obj
    },
  },
}
</script>
