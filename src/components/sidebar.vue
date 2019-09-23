<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading"><router-link to="/">edit-pdf</router-link></div>
      <div class="list-group list-group-flush">
        <router-link class="list-group-item list-group-item-action bg-light" href="about">使い方</router-link>
        <router-link class="list-group-item list-group-item-action bg-light" to="/">Q & A</router-link>
        <router-link class="list-group-item list-group-item-action bg-light" to="/">問い合わせ</router-link>
      </div>
    </div>
</template>

<script>
import inputField from './inputField.vue';

export default {
  name: 'pagecontent',
  components: {
    inputField
  },
    data() {
    return {
      isOpened: false,
      isOpenedDropdown: false
    };
  },
  methods: {
    newPage:function(){
      let routeData = this.$router.resolve({name: 'about', query: {data: "someData"}});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

