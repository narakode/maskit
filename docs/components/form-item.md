---
title: Form item
---

<script setup>
import FormItem from '../../src/components/form-item/FormItem.vue'
import Input from '../../src/components/input/Input.vue'
</script>

# Form Item

Form item adalah komponen untuk mewadahi input atau item pada form yang akan diberi label.

## Contoh

```vue
<template>
  <FormItem label="Nama" id="nama" v-slot="{ id }">
    <Input :id="id" placeholder="Nama" />
  </FormItem>
</template>
```

::: raw
<FormItem label="Nama" id="nama" v-slot="{ id }">
<Input :id="id" placeholder="Nama" />
</FormItem>
:::

## Props

| Nama    | Type     | Wajib?             | Default | Fungsi     |
| ------- | -------- | ------------------ | ------- | ---------- |
| `label` | `string` | :white_check_mark: | `''`    | Teks label |
| `id`    | `string` | :white_check_mark: | `''`    | Id input   |

## Slots

| Nama      | Payload          | Fungsi                      |
| --------- | ---------------- | --------------------------- |
| `default` | `{ id: string }` | Untuk menampilkan form item |
