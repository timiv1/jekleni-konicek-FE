<template>
  <v-data-table :items="seznamDelavcev" :headers="headers">
    <template #[urediSlot]="slotProps">
      <v-btn
        v-if="!(urediVrstico != null && urediVrstico == slotProps.index)"
        icon
        @click="urediVrstico = slotProps.index"
        ><v-icon>edit</v-icon></v-btn
      >
      <template v-else>
        <v-btn icon color="warning" @click="saveChanges"
          ><v-icon>cancel</v-icon></v-btn
        >
        <v-btn icon color="success" @click="saveChanges"
          ><v-icon>save</v-icon></v-btn
        >
        <v-btn icon color="error" @click="deleteZaposleni"
          ><v-icon>delete</v-icon></v-btn
        >
      </template>
    </template>
    <template #[imeSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        v-model="slotProps.item.ime"
      ></v-text-field>
    </template>
    <template #[priimekSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        v-model="slotProps.item.priimek"
      ></v-text-field>
    </template>
    <template #[emailSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        v-model="slotProps.item.email"
      ></v-text-field>
    </template>
    <template #[drzavljanstvoSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        v-model="slotProps.item.drzavljanstvo"
      ></v-text-field>
    </template>
    <template #[delovnoMestoSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        v-model="slotProps.item.delovnoMesto"
      ></v-text-field>
    </template>
    <template #[urnaPostavkaSlot]="slotProps">
      <v-text-field
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
        :v-model="slotProps.item.urnaPostavka"
      ></v-text-field>
    </template>
  </v-data-table>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      urediSlot: 'item.uredi',
      imeSlot: 'item.ime',
      priimekSlot: 'item.priimek',
      emailSlot: 'item.email',
      drzavljanstvoSlot: 'item.drzavljanstvo',
      delovnoMestoSlot: 'item.delovnomesto',
      urnaPostavkaSlot: 'item.urnapostavka',
      urediVrstico: null,
      headers: [
        { text: 'ime', value: 'ime' },
        { text: 'priiemk', value: 'priimek' },
        { text: 'email', value: 'email' },
        { text: 'državljanstvo', value: 'drzavljanstvo' },
        { text: 'delovno mesto', value: 'delovnomesto' },
        { text: 'urna postavka', value: 'urnapostavka' },
        { text: 'akcije', value: 'uredi' },
      ],
      seznamDelavcev: [],
    }
  },
  async fetch() {
    await this.getDelavci()
  },
  methods: {
    cancelEdit() {
      this.urediVrstico = null
    },
    saveChanges() {
      this.urediVrstico = null
    },
    deleteZaposleni() {
      this.urediVrstico = null
    },
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
