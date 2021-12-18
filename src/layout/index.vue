<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><Aside /></el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <!-- <keep-alive> -->
            <component :is="Component" />
            <!-- </keep-alive> -->
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';

export default defineComponent({
  components: {
    Header,
    Aside,
  },
  setup() {},
});
</script>
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
</style>
