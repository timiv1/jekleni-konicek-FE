<template>
  <v-data-table :items="delovniCasi" :headers="headers">
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
        :disabled="true"
        v-model="slotProps.item.delavec.ime"
      ></v-text-field>
    </template>
    <template #[priimekSlot]="slotProps">
      <v-text-field
        :disabled="true"
        v-model="slotProps.item.delavec.priimek"
      ></v-text-field>
    </template>
    <template #[emailSlot]="slotProps">
      <v-text-field
        :disabled="true"
        v-model="slotProps.item.delavec.email"
      ></v-text-field>
    </template>
    <template #[dopustOd]="slotProps">
      <v-text-field
        v-model="slotProps.item.dopust.od"
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
      ></v-text-field>
    </template>
    <template #[dopustDo]="slotProps">
      <v-text-field
        v-model="slotProps.item.dopust.do"
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
      ></v-text-field>
    </template>
    <template #[ureOd]="slotProps">
      <v-text-field
        v-model="slotProps.item.ure.od"
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
      ></v-text-field>
    </template>
    <template #[ureDo]="slotProps">
      <v-text-field
        v-model="slotProps.item.ure.do"
        :disabled="!(urediVrstico != null && urediVrstico == slotProps.index)"
      ></v-text-field>
    </template>
    <!-- <template #[delovnoMestoSlot]="slotProps">
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
    </template> -->
  </v-data-table>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      urediSlot: 'item.uredi',
      imeSlot: 'item.delavec.ime',
      priimekSlot: 'item.delavec.priimek',
      emailSlot: 'item.delavec.email',
      dopustOd: 'item.dopust.od',
      dopustDo: 'item.dopust.do',
      ureOd: 'item.ure.od',
      ureDo: 'item.ure.do',

      urediVrstico: null,
      headers: [
        { text: 'ime', value: 'delavec.ime' },
        { text: 'priiemk', value: 'delavec.priimek' },
        { text: 'email', value: 'delavec.email' },
        { text: 'zacetek dopusta', value: 'dopust.od' },
        { text: 'konec dopusta', value: 'dopust.do' },
        { text: 'zacetek dela', value: 'ure.od' },
        { text: 'konec dela', value: 'ure.do' },
        { text: 'akcije', value: 'uredi' },
      ],
      delovniCasi: [],
    }
  },
  async fetch() {
    await this.getDelovniCasi()
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
     async getDelovniCasi() {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$delCasApi.$get('GetDelovniCasi')
      this.delovniCasi = obj
    },
    async getDelavecById(id) {
      // const obj = await this.$axios.$get(
      const obj = await this.$upDelApi.$get(`GetDelavecById/${id}`)
      this.delovniCasi = obj
    },
    async GetDelavecByDelovnoMesto(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `GetDelavecByDelovnoMesto/${delovnoMesto}`
      )
      this.delovniCasi = obj
    },
    async addDelavec(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `GetDelavecByDelovnoMesto/${delovnoMesto}`
      )
      this.delovniCasi = obj
    },
    async updateDelavecDelovnoMesto(delovnoMesto) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(
        `UpdateDelavecDelovnoMesto/${delovnoMesto}`
      )
      this.delovniCasi = obj
    },
    async updateDelavecUrnaPostavka(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$post(`UpdateDelavecUrnaPostavka/${id}`)
      this.delovniCasi = obj
    },
    async updateDelavecMulti(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(`UpdateDelavec/${id}`)
      this.delovniCasi = obj
    },
    async deleteDelavec(id) {
      // const obj = await this.$axios.$get(
      //   'http://studentdocker.informatika.uni-mb.si:12321/GetDelovniCasi'
      // )
      const obj = await this.$upDelApi.$get(`DeleteDelavec/${id}`)
      this.delovniCasi = obj
    },
  },
}
</script>
