---
title: Confirm
---

<script setup>
import { ref } from 'vue'
import Confirm from '../../src/components/confirm/Confirm.vue'
import Button from '../../src/components/button/Button.vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

# Confirm

Confirm adalah komponen untuk menampilkan modal konfirmasi, terdiri dari elemen judul, deskripsi, tombol konfirmasi dan tombol batal. Semua teks elemen dapat dimodifikasi lewat props.

## Contoh

```vue
<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Buka confirm modal</Button>

  <Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    cancel-text="Batal"
    v-model:visible="visible"
  />
</template>
```

::: raw
<Button @click="visible1 = true">Buka confirm modal</Button>
<Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    cancel-text="Batal"
    v-model:visible="visible1"
/>
:::

## Warna

Warna tombol konfirmasi bisa diubah dengan props `confirm-color` dengan nilai `primary`, `error`, `warning`, dan `success`. Default `primary`.

```vue
<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Buka confirm modal</Button>

  <Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    confirm-color="error"
    cancel-text="Batal"
    v-model:visible="visible"
  />
</template>
```

::: raw
<Button @click="visible2 = true">Buka confirm modal</Button>
<Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    confirm-color="error"
    cancel-text="Batal"
    v-model:visible="visible2"
/>
:::

## Loading

Tombol konfirmasi bisa dibuat menjadi sedang loading dengan menambahkan props `loading`.

```vue
<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Buka confirm modal</Button>

  <Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    cancel-text="Batal"
    loading
    v-model:visible="visible"
  />
</template>
```

::: raw
<Button @click="visible3 = true">Buka confirm modal</Button>
<Confirm
    title="Konfirmasi Hapus"
    message="Apakah anda yakin ingin menghapus item ini?"
    confirm-text="Yakin"
    cancel-text="Batal"
    loading
    v-model:visible="visible3"
/>
:::

## Props

| Nama            | Type                                             | Wajib?             | Default   | Fungsi                           |
| --------------- | ------------------------------------------------ | ------------------ | --------- | -------------------------------- |
| `title`         | `string`                                         | :white_check_mark: | `''`      | Judul konfirmasi                 |
| `message`       | `string`                                         | :white_check_mark: | `''`      | Pesan konfirmasi                 |
| `confirm-text`  | `string`                                         | :x:                | `Confirm` | Teks tombol konfirmasi           |
| `cancel-text`   | `string`                                         | :x:                | `Cancel`  | Teks tombol batal konfirmasi     |
| `confirm-color` | `enum('primary', 'error', 'warning', 'success')` | :x:                | `primary` | Warna tombol konfirmasi          |
| `loading`       | `boolean`                                        | :x:                | `false`   | Stauts loading tombol konfirmasi |

## Models

| Nama      | Type      | Fungsi                       |
| --------- | --------- | ---------------------------- |
| `visible` | `boolean` | Memunculkan modal konfirmasi |

## Events

| Nama        | Payload | Kapan                            |
| ----------- | ------- | -------------------------------- |
| `confirmed` | -       | Ketika tombol konfirmasi ditekan |
