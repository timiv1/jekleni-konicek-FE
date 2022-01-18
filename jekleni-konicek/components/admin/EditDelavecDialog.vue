<template>
  <v-dialog>
    <template #activator="{ on }">
      <v-btn icon v-on="on"><v-icon> edit </v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title>Uredi delavca</v-card-title>
      <v-card-text>
        <edit-delavec-text-field v-model="ime"></edit-delavec-text-field>
        <edit-delavec-text-field v-model="ime"></edit-delavec-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import EditDelavecTextField from '../general/EditDelavecTextField.vue'

export default {
  components: { EditDelavecTextField },
  props: {
    delavecInfo: { required: true, type: Object },
  },
  data() {
    return {
      delavecInfoShown: this.delavecInfo,
      ime: this.delavecInfo.ime,
    }
  },
}
</script>
