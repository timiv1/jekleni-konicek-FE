<template>
  <v-container class="" fluid>
    <h2 class=" pt-10 pb-5">Tabela delavcev</h2>
    <v-row>
      <v-col cols="12">
        <delavci-data-table> </delavci-data-table>
      </v-col>
      <v-col cols="12"> <h2 class=" pt-5 ">Dodaj zaposlenega</h2></v-col>

      <v-col v-for="f in Object.keys(newDelavec)" :key="f" :cols="textCols" class="">
        <v-text-field v-model="newDelavec[f]" :label="f"></v-text-field>
      </v-col>
      <v-col><v-btn outlined>Dodaj delavca</v-btn></v-col>
    </v-row>
    <h2 class=" pt-15 pb-5">Tabela delovnih ur</h2>
    <v-row>
      <v-col cols="12"><delovni-casi-data-table></delovni-casi-data-table> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DelovniCasiDataTable from './DelovniCasiDataTable.vue'
import DelavciDataTable from '~/components/admin/DelavciDataTable.vue'
export default {
  components: { DelavciDataTable, DelovniCasiDataTable },
  data() {
    return {
      textCols: 2,
      newDelavec: {
        ime: null,
        priimek: null,
        email: null,
        drzavljanstvo: null,
        datumRojstva: null,
        delovnoMesto: null,
        urnaPostavka: null,
        geslo: null,
      },
    }
  },
}
</script>
