<template>
    <div class="formgroup">
      <b-form-group
      id="titlearea"
      label-cols-sm="2"
      label-cols-lg="2"
      :description="comment"
      :label="labeltext"
      label-for="input-horizontal"
    >
       <input :type="areatype" :id="areaId" :name="areaId"/>
    </b-form-group>
    </div>
</template>

<script>
export default {
  name: 'formgroup',
  props: {
    labeltext: String,
    areatype : String,
    areaId: String,
    comment: String
  }
}
</script>

<style scoped>
</style>
