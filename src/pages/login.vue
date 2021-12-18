<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="flex flex-col bg-gray-100 bg-opacity-70 rounded w-1/4 p-8">
      <el-input
        v-model="state.username"
        :placeholder="t('username_tip')"
        :prefix-icon="User"
        size="medium"
      />
      <el-input
        v-model="state.password"
        :placeholder="t('password_tip')"
        show-password
        class="my-4"
        size="medium"
        :prefix-icon="Lock"
      />
      <el-button color="#1296db" style="color: white">{{ t('login') }}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { Lock, User } from '@element-plus/icons-vue';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const state = reactive({
      username: '',
      password: '',
    });
    return { t, state, Lock, User };
  },
});
</script>
