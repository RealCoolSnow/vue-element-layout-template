<template>
  <el-config-provider :locale="locale">
    <div class="w-screen h-screen">
      <router-view />
    </div>
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    console.log('app created');
    return { locale: zhCn };
  },
});
</script>
