---
title: Heading
---

<script setup>
import Heading from '../../src/components/heading/Heading.vue'
import Badge from '../../src/components/badge/Badge.vue'
</script>

# Heading

Heading adalah komponen untuk menampilkan judul. Bisa digunakan sebagai judul halaman, section, dll.

## Contoh

```vue
<Heading title="Heading" />
```

::: raw

<div class="bg-white p-4 rounded">
<Heading title="Heading" />
</div>
:::

## Level

Heading bisa diatur levelnya dengan props `level`, nilainya angka `1-6`. Default level `1`.

```vue
<Heading title="Heading" :level="3" />
```

::: raw

<div class="bg-white p-4 rounded">
<Heading title="Heading" :level="3" />
</div>
:::

## Action

Heading bisa diberi konten action yang akan ditampilkan di sebelah kanan heading dengan slot `action`.

```vue
<template>
  <Heading title="Heading" :level="3">
    <template #action>
      <Badge>Aktif</Badge>
    </template>
  </Heading>
</template>
```

::: raw

<div class="bg-white p-4 rounded">
<Heading title="Heading" :level="3">
    <template #action>
        <Badge>Aktif</Badge>
    </template>
</Heading>
</div>
:::

## Props

| Nama    | Type          | Wajib?             | Default | Fungsi      |
| ------- | ------------- | ------------------ | ------- | ----------- |
| `title` | `string`      | :white_check_mark: | `null`  | Teks judul  |
| `level` | `number(1-6)` | :x:                | `1`     | Level judul |

## Slots

| Nama     | Payload | Fungsi                                                |
| -------- | ------- | ----------------------------------------------------- |
| `action` | `-`     | Konten yang akan ditampilkan di sebelah kanan heading |
