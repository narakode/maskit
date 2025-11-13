---
title: Select
---

<script setup>
import { ref } from 'vue'
import Select from '../../src/components/select/Select.vue'

const selected = ref('1')
</script>

# Select

Select adalah komponen untuk menampilkan elemen select native HTML dengan style tambahan.

## Contoh

Daftar opsi dimasukkan ke props `options` dalam bentuk array objek, `id` untuk value, `name` untuk label.

```vue{9-13}
<script setup>
import { ref } from 'vue'

const selected = ref('1')
</script>

<template>
    <Select
        :options="[
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' }
        ]"
        v-model="selected"
    />
</template>
```

::: raw
<Select
:options="[
{ id: '1', name: 'Option 1' },
{ id: '2', name: 'Option 2' },
{ id: '3', name: 'Option 3' }
]"
v-model="selected"
/>
:::

## Fullwidth

Agar lebar select menjadi full, tambahkan props `width` dengan nilai `full`.

```vue{9}
<script setup>
import { ref } from 'vue'

const selected = ref('1')
</script>

<template>
    <Select
        width="full"
        :options="[
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' }
        ]"
        v-model="selected"
    />
</template>
```

::: raw
<Select
width="full"
:options="[
{ id: '1', name: 'Option 1' },
{ id: '2', name: 'Option 2' },
{ id: '3', name: 'Option 3' }
]"
v-model="selected"
/>
:::

## Ukuran

Select bisa diubah ukurannya menjadi `sm`, `md`, `lg` dengan props `size`. Defaultnya `md`.

```vue{9}
<script setup>
import { ref } from 'vue'

const selected = ref('1')
</script>

<template>
    <Select
        size="lg"
        :options="[
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' }
        ]"
        v-model="selected"
    />
</template>
```

::: raw
<Select
size="lg"
:options="[
{ id: '1', name: 'Option 1' },
{ id: '2', name: 'Option 2' },
{ id: '3', name: 'Option 3' }
]"
v-model="selected"
/>
:::

## Warna

Select bisa diubah warnanya menjadi `primary`, `secondary`, `light`, `warning`, `success` dan `error` dengan props `color`. Defaultnya `light`.

```vue{9}
<script setup>
import { ref } from 'vue'

const selected = ref('1')
</script>

<template>
    <Select
        color="error"
        :options="[
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' }
        ]"
        v-model="selected"
    />
</template>
```

::: raw
<Select
color="error"
:options="[
{ id: '1', name: 'Option 1' },
{ id: '2', name: 'Option 2' },
{ id: '3', name: 'Option 3' }
]"
v-model="selected"
/>
:::

## Props

| Nama        | Type                                                                   | Wajib? | Default | Fungsi                    |
| ----------- | ---------------------------------------------------------------------- | ------ | ------- | ------------------------- |
| `options`   | `{ id: string, name: string }[]`                                       | :x:    | `[]`    | Daftar opsi               |
| `size`      | `enum('sm', 'md', 'lg')`                                               | :x:    | `md`    | Ukuran select             |
| `color`     | `enum('light', 'secondary', 'primary', 'error', 'warning', 'success')` | :x:    | `light` | Warna select              |
| `width`     | `enum('fit', 'full')`                                                  | :x:    | `fit`   | Lebar select              |
| `debounced` | `boolean`                                                              | :x:    | `false` | Event change ada debounce |
| `required`  | `boolean`                                                              | :x:    | `false` | Select required           |
| `name`      | `string`                                                               | :x:    | `''`    | Nama select               |
| `id`        | `string`                                                               | :x:    | `''`    | Id select                 |

## Models

| Nama      | Type   | Fungsi                |
| --------- | ------ | --------------------- |
| `default` | `null` | Binding opsi terpilih |

## Events

| Nama     | Payload | Kapan               |
| -------- | ------- | ------------------- |
| `change` | -       | Ketika opsi dipilih |
