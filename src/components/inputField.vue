<template>
  <div id="inputfiled">
    <div>
      <form id="form" action="url('http://localhost:8000/post')" method="post" accept-charset="utf-8" return false>
      <textinputformgroup labeltext="タイトル" areaId="titleArea" comment="ヘッダーに表示するタイトル。未記入で非表示。"/>
      <textinputformgroup labeltext="名前" areaId="nameArea" comment="作者名を記入。"/>
      <textareaformgroup labeltext="本文" areaId="textArea" comment="md形式で見出しや改ページが使用可能。詳しくはこちら。"/>
      <radioformgroup labeltext="サイズ"  areaId="radioArea" comment="pdf出力時のページサイズを選択。"/>
    </form>
    </div>
      <b-button href="javascript:void(0);" v-on:click="postClick">入力完了</b-button>
  </div>
</template>

<script>
import textinputformgroup from './formgroup.vue'
import textareaformgroup from './formgroup2.vue'
import radioformgroup from './formgroup3.vue'
import BootstrapVue from 'bootstrap-vue'

import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$axios = axios;

import * as jsPDF from 'jspdf'


export default {
  name: 'inputfiled',
  components: {
      textinputformgroup,
      textareaformgroup,
      radioformgroup
  },
    data() {
        return {
            rows: null
        }
    },
    
  methods: {
    postClick:function(){
      const title = document.getElementById('titleArea').value;
      const text = document.getElementById('textArea').value;
      const textData = { title : text};

    axios.post('http://localhost:8000/post', textData)
    .then(res => {
      this.rows = res.data;
      alert(this.rows);
    })
    .catch(error=> {
        alert("現在調整中。");
    });
    },
    linkAPI:function(){

    },
    createPDF:function(){
    var pdf = new jsPDF('p','pt','a4');
pdf.addHTML(document.body,function() {
    pdf.save('web.pdf');
});
  }
  },
}
</script>

<style lang="scss">

#inputfiled{
  padding:5%;
}
</style>
