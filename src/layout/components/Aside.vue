<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { getMenuList } from '../aside-menu'
import { GetterTypes } from '@/store/types'
import store from '@/store'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const state = reactive({
      collapse: computed(() => store.getters[GetterTypes.APP.COLLAPSE]),
    })
    const menuList = getMenuList(t)
    const onMenuSelected = (key: string, keyPath: string) => {
      console.log('onMenuSelected', key, keyPath)
    }
    return { state, menuList, onMenuSelected, route }
  },
})
</script>

<template>
  <el-menu
    :default-active="route.path"
    :collapse="state.collapse"
    unique-opened
    router
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
    @select="onMenuSelected"
  >
    <template v-for="item in menuList">
      <template v-if="item.child">
        <el-sub-menu :key="item.path" :index="item.path">
          <template #title>
            <i :class="`iconfont ${item.icon}`" />
            <span>{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.child">
            <el-sub-menu v-if="subItem.child" :key="subItem.path" :index="subItem.path">
              <template #title>
                {{ subItem.title }}
              </template>
              <el-menu-item
                v-for="threeItem in subItem.child"
                :key="threeItem.path"
                :index="threeItem.path"
              >
                {{ threeItem.title }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :key="subItem.path" :index="subItem.path">
              {{ subItem.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="item.path" :index="item.path">
          <i :class="`iconfont ${item.icon}`" />
          <template #title>
            {{ item.title }}
          </template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped>
.el-menu {
  min-height: calc(100vh - 80px);
}
</style>
