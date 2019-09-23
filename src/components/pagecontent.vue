   <template>
    <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-light border-bottom">
          <button class="navbar-toggler" type="button" @click="isOpened = !isOpened">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <transition name="slide-fade">
          <div class="dropdown-menu-right" v-if="isOpened" >
            <router-link class="dropdown-item" to="/">トップ</router-link>
            <router-link class="dropdown-item" to="about">使い方</router-link>
            <router-link class="dropdown-item" to="/">問い合わせ</router-link>
            <div class="dropdown-divider"></div>
          </div>
        </transition>
      <div class="container-fluid">
      <router-view></router-view>
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
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}


</style>
