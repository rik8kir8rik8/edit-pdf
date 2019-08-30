<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
        <form id="form" method="post" accept-charset="utf-8" return false>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" class="form-control" name="name"><br>
    </div>
    <div class="form-group">
      <label for="text">Text:</label>
      <textarea id="text" class="form-control" name="text"></textarea>
    </div>
    </form>
    <input type="button" id="sub" class="btn btn-dark" v-on:click="postClick" value="OK">
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
  methods: {
    postClick:function(){
      const nametxt = document.getElementById('name').value;
      const txt = document.getElementById('text').value;
      const textData = { name: nametxt ,text: txt};
   
    axios.post('http://localhost:8080/post', textData)
    .then(res => {
      alert("「" + res.name + "」登録完了");
    })
    .catch(error=> {
        alert("「" + error.name + "」登録失敗");
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
