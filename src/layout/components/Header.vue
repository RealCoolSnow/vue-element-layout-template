<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import store from '@/store'
import { GetterTypes, MutationTypes } from '@/store/types.d'

const { t } = useI18n()
const collapse = computed(() => store.getters[GetterTypes.APP.COLLAPSE])
function collapseChange() {
  store.commit(MutationTypes.APP.SET_COLLAPSE, !collapse.value)
}
</script>

<template>
  <div class="w-full h-full px-0 bg-primary text-white flex items-center">
    <div class="ml-6 btn" @click="collapseChange">
      <i v-if="!collapse" class="iconfont icon-collapse-left" />
      <i v-else class="iconfont icon-collapse-right" />
    </div>
    <span class="text-center w-full">{{ t('header_tip') }}</span>
  </div>
</template>
