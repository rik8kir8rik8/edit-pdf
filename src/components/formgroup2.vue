<template>
    <div class="formgroup">
      <b-form-group
      id="textarea"
      label-cols-sm="2"
      label-cols-lg="2"
      :description="comment"
      :label="labeltext"
      label-for="input-horizontal"
    >
       <b-form-textarea :id="areaId" :name="areaId"/>
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
  }
}
</script>

<style scoped>

</style>
