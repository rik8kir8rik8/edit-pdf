<template>
    <div class="formgroup">
      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="2"
      label-cols-lg="2"
      :description="comment"
      :label="labeltext"
      label-for="input-horizontal"
    >
      <b-form-radio-group
        :id="areaId"
        :name="areaId"
        v-model="selected"
        :options="options"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>
    </div>
</template>

<script>
export default {
  name: 'formgroup',
  props: {
    labeltext: String,
    areaId: String,
    comment: String
  },
  data() {
  return {
    selected: 'fourth',
    options: [
      { text: 'A4', value: 'first', disabled: true },
      { text: 'B5', value: 'second', disabled: true },
      { text: 'A5', value: 'third', disabled: true },
      { text: 'A6', value: 'fourth' }
    ]
  }
  }
}
</script>

<style scoped>

</style>
