<template>
  <v-container fluid
    ><v-row>
      <v-col> <v-btn @click="test">testni klic goran</v-btn> </v-col></v-row
    ></v-container
  >
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    test() {
      this.$delNarApi.$get('das')
    },
  },
}
</script>
