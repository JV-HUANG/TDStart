<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'user'
})

const form = ref(false)
const email = ref(null)
const password = ref(null)
const loading = ref(false)

function onSubmit () {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
function required (v) {
  return !!v || '必填项不能为空'
}
//////////////////////////////////////////////////////////////////
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
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
  <v-card class="mx-auto px-6 py-8 my-16 gap-4" max-width="420">
    <v-form v-model="form" @submit.prevent="login">
      <img src="/assets/img/logo.svg" alt="logo" width="120" height="120" class="mx-auto" />
      <v-text-field v-model="credentials.email" :readonly="loading" :rules="[required]"
       class="mb-2" label="帐号" clearable>
      </v-text-field>
      <v-text-field v-model="credentials.password" :readonly="loading" :rules="[required]"
       label="密码" placeholder="请输入您的密码" type="password" clearable>
      </v-text-field>

      <br>
      <v-btn prepend-icon="mdi-checkbox-marked-outline" :disabled="!form" :loading="loading" variant="tonal"
        size="large" type="submit" block>
        登录网站
      </v-btn>
      <p class="text-center gap-4 my-4 text-subtitle-2 font-italic">admin@admin.com / admin.com</p>
    </v-form>
  </v-card>
</template>
