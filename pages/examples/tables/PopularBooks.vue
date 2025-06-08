<template>
  <v-sheet border rounded>
    <v-data-table :headers="headers" :hide-default-footer="books.length < 11" :items="books">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon color="medium-emphasis" icon="mdi-book-multiple" size="x-small" start></v-icon>
            流行书籍
          </v-toolbar-title>
          <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="增加一项" border @click="add"></v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.title="{ value }">
        <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-book" label>
          <template v-slot:prepend>
            <v-icon color="medium-emphasis"></v-icon>
          </template>
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>
          <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
        </div>
      </template>
      <template v-slot:no-data>
        <v-btn prepend-icon="mdi-backup-restore" rounded="lg" text="Reset data" variant="text" border @click="reset"></v-btn>
      </template>
    </v-data-table>
  </v-sheet>
  <v-dialog v-model="dialog" max-width="500" class="mt-8">
    <v-card :subtitle="`${isEditing ? '更新' : '创建'} 你最喜欢的书`"
      :title="`${isEditing ? '编辑' : '添加'} 一本书`">
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="record.title" label="标题"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="record.author" label="作者"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select v-model="record.genre" :items="['Fiction', 'Dystopian', 'Non-Fiction', 'Sci-Fi']"
              label="流派"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-number-input v-model="record.year" :max="adapter.getYear(adapter.date())" :min="1"
              label="年度"></v-number-input>
          </v-col>
          <v-col cols="12" md="6">
            <v-number-input v-model="record.pages" :min="1" label="页数"></v-number-input>
          </v-col>
        </v-row>
      </template>
      <v-divider></v-divider>
      <v-card-actions class="bg-surface-light px-6 py-4">
        <v-btn prepend-icon="mdi-close" variant="tonal" text="取消" @click="dialog = false"></v-btn>
        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-content-save" variant="tonal" text="保存" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>

definePageMeta({
  layout: 'examples'
})

import { onMounted, ref, shallowRef } from 'vue'
import { useDate } from 'vuetify'

const adapter = useDate()

const DEFAULT_RECORD = { title: '', author: '', genre: '', year: adapter.getYear(adapter.date()), pages: 1 }

const books = ref([])
const record = ref(DEFAULT_RECORD)
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  { title: '标题', key: 'title', align: 'start' },
  { title: '作者', key: 'author' },
  { title: '流派', key: 'genre' },
  { title: '年度', key: 'year', align: 'end' },
  { title: '页数', key: 'pages', align: 'end' },
  { title: '操作', key: 'actions', align: 'end', sortable: false },
]

onMounted(() => {
  reset()
})

function add() {
  isEditing.value = false
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function edit(id) {
  isEditing.value = true

  const found = books.value.find(book => book.id === id)

  record.value = {
    id: found.id,
    title: found.title,
    author: found.author,
    genre: found.genre,
    year: found.year,
    pages: found.pages,
  }

  dialog.value = true
}

function remove(id) {
  const index = books.value.findIndex(book => book.id === id)
  books.value.splice(index, 1)
}

function save() {
  if (isEditing.value) {
    const index = books.value.findIndex(book => book.id === record.value.id)
    books.value[index] = record.value
  } else {
    record.value.id = books.value.length + 1
    books.value.push(record.value)
  }

  dialog.value = false
}

function reset() {
  dialog.value = false
  record.value = DEFAULT_RECORD
  books.value = [
    { id: 1, title: '《杀死一只知更鸟》', author: 'Harper Lee', genre: 'Fiction', year: 1960, pages: 281 },
    { id: 2, title: '《1984》', author: 'George Orwell', genre: 'Dystopian', year: 1949, pages: 328 },
    { id: 3, title: '《了不起的盖茨比》', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, pages: 180 },
    { id: 4, title: '《智人（现代人类）》', author: 'Yuval Noah Harari', genre: 'Non-Fiction', year: 2011, pages: 443 },
    { id: 5, title: '《沙丘》', author: 'Frank Herbert', genre: 'Sci-Fi', year: 1965, pages: 412 },
  ]
}
</script>