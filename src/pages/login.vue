<template>
  <div class="flex flex-col items-center w-full h-full pt-48 bg-gray-50">
    <div class="text-lg text-primary">{{ t('login_title') }}</div>
    <div class="flex flex-col bg-gray-200 bg-opacity-70 rounded w-1/4 p-8 mt-8">
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
      <el-button color="#1296db" style="color: white" @click="onLogin">{{ t('login') }}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { Lock, User } from '@element-plus/icons-vue';
import { MutationTypes } from '@/store/types';
import { useRouter } from 'vue-router';
import store from '@/store';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const state = reactive({
      username: 'admin',
      password: '123456',
    });
    const onLogin = () => {
      store.commit(MutationTypes.APP.SET_USERNAME, state.username);
      router.replace('/');
    };
    return { t, state, Lock, User, onLogin };
  },
});
</script>
