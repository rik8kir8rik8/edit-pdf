<template>
  <div id="app">
        <form id="form" action="url('http://localhost:8080/post')" method="post" accept-charset="utf-8" return false>
    <div class="form-group">
      <input type="text" id="name" class="form-control" name="name"><br>
    </div>
    <div class="form-group">
      <textarea id="text" class="form-control" name="text"></textarea>
    </div>
    </form>
    <input type="submit" id="sub" class="btn btn-dark" v-on:click="postClick" value="OK">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$axios = axios;

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    data: function() {
        return {
            rows: []
        }
    },
  methods: {
    postClick:function(){
      const nametxt = document.getElementById('name').value;
      const txt = document.getElementById('text').value;
      const textData = {text: txt};

    axios.post('http://localhost:8080/post', textData)
    .then(res => {
      this.rows = res.data;
      alert(this.rows);
    })
    .catch(error=> {
        alert("「" + error.text + "」登録失敗");
    });
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
