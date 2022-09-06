<script lang="ts">
import { computed, defineComponent } from 'vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import store from '@/store'
import { GetterTypes } from '@/store/types'

export default defineComponent({
  components: {
    Header,
    Aside,
  },
  setup() {
    const collapse = computed(() => store.getters[GetterTypes.APP.COLLAPSE])
    return { collapse }
  },
})
</script>

<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside><Aside /></el-aside>
      <div class="content-box" :class="{ 'content-collapse': collapse }">
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <!-- <keep-alive> -->
              <component :is="Component" />
              <!-- </keep-alive> -->
            </transition>
          </router-view>
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0;
  height: 80px;
}
.el-main {
  background-color: #e9eef3;
  height: calc(100vh - 80px);
  padding: 0;
}
.el-aside {
  width: 250px;
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 80px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #fefefe;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.content-collapse {
  left: 65px;
}
</style>
