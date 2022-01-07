<template>
  <v-container class="" fluid>
    <v-row>
      <v-col cols="12">
        <delavci-data-table> </delavci-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DelavciDataTable from '~/components/admin/DelavciDataTable.vue'
export default {
  components: { DelavciDataTable },
}
</script>
