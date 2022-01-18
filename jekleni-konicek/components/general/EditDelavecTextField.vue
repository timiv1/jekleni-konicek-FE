<template>
  <v-text-field v-model="textValue" @input="$emit('input', textValue)">
  </v-text-field>
</template>
<script>
export default {
  props: {
    value: { required: true, type: String },
  },
  data() {
    return {
      textValue: this.value,
    }
  },
}
</script>
