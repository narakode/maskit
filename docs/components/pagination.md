---
title: Pagination
---

<script setup>
import Pagination from '../../src/components/pagination/Pagination.vue'
import { ref } from 'vue'

const currentPage = ref(2)
</script>

# Pagination

Pagination adalah komponen untuk membuat link ke halaman lain yang bernomor.

## Contoh

```vue
<Pagination :total-pages="3" />
```

::: raw
<Pagination :total-pages="3" />
:::

## Menandai Halaman yang Sedang Aktif

Untuk menandai halaman yang sedang aktif, tambahkan model `current-page`, nilainya angka.

```vue
<script setup>
import { ref } from 'vue';

const currentPage = ref(2);
</script>

<template>
  <Pagination :total-pages="3" v-model:current-page="currentPage" />
</template>
```

::: raw
<Pagination :total-pages="3" v-model:current-page="currentPage" />
:::

## Props

| Nama          | Type     | Wajib? | Default | Fungsi         |
| ------------- | -------- | ------ | ------- | -------------- |
| `total-pages` | `number` | :x:    | `0`     | Jumlah halaman |

## Models

| Nama           | Type   | Fungsi                            |
| -------------- | ------ | --------------------------------- |
| `current-page` | `null` | Binding halaman yang sedang aktif |

## Events

| Nama          | Payload | Kapan                         |
| ------------- | ------- | ----------------------------- |
| `change-page` | -       | Ketika halaman aktif berganti |
