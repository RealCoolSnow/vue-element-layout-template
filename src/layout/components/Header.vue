<template>
  <div class="w-full h-full px-0 bg-primary text-white flex items-center justify-center">
    <span>{{ t('header_tip') }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
