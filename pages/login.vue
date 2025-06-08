<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'user'
})

const form = ref(false)
const email = ref(null)
const password = ref(null)
const loading = ref(false)
const visible = ref(false)

function onSubmit() {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
function required(v) {
  return !!v || '必填项不能为空'
}
//////////////////////////////////////////////////////////////////
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: 'admin@admin.com',
  password: 'admin.com',
})
async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
    .then(async () => {
      // 在客户端刷新会话并重定向到主页
      await refreshSession()
      await navigateTo('/')
    })
    .catch(() => alert('无效的登录信息'))
}

</script>

<template>
  <v-card class="mx-auto px-8 py-8 my-16 gap-4" width="400" elevation="16">
    <v-form v-model="form" @submit.prevent="login">
      <img src="/assets/img/logo.svg" alt="logo" width="150" height="150" class="mx-auto" />
      <v-text-field 
        prepend-inner-icon="mdi-email-outline" 
        variant="outlined" 
        v-model="credentials.email"
        :readonly="loading" 
        :rules="[required]" 
        class="mb-2" 
        label="帐号" 
        clearable>
      </v-text-field>
      <v-text-field 
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
        variant="outlined"
        v-model="credentials.password" 
        :type="visible ? 'text' : 'password'"
        @click:append-inner="visible = !visible"
        :readonly="loading" 
        :rules="[required]" 
        label="密码"
        prepend-inner-icon="mdi-lock-outline" 
        placeholder="请输入您的密码" 
        clearable>
      </v-text-field>
      <v-btn 
        prepend-icon="mdi-checkbox-marked-outline" 
        class="text-none" 
        :disabled="!form"
        :loading="loading" 
        variant="outlined"
        size="x-large"
        type="submit" 
        block>
        登录网站
      </v-btn>
      <br>
      <p class="text-center gap-4 my-4 text-subtitle-2">粤ICP备2025381183号<br /> & 基于 MIT 许可发布</p>
    </v-form>
  </v-card>
</template>
