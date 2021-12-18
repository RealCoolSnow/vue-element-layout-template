<template>
  <div class="w-full h-full px-0 bg-primary text-white flex items-center">
    <div class="ml-6 btn" @click="collapseChange">
      <i v-if="!collapse" class="iconfont icon-collapse-left"></i>
      <i v-else class="iconfont icon-collapse-right"></i>
    </div>
    <span class="text-center w-full">{{ t('header_tip') }}</span>
  </div>
</template>
<script lang="ts">
import store from '@/store';
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { MutationTypes, GetterTypes } from '@/store/types';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const collapse = computed(() => store.getters[GetterTypes.APP.COLLAPSE]);
    const collapseChange = () => {
      store.commit(MutationTypes.APP.SET_COLLAPSE, !collapse.value);
    };
    return { t, collapse, collapseChange };
  },
});
</script>
