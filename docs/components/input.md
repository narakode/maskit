---
title: Input
---

<script setup>
import { ref } from 'vue'
import Input from '../../src/components/input/Input.vue'

const text = ref('test')

const onInput = () => console.log('input')
const onInputDebounce = () => console.log('input debounce')
const onChange = () => {}
const onKeyup = () => {}
</script>

# Input

Input adalah komponen untuk memasukkan teks dari keyboard.

## Contoh

```vue
<Input />
```

::: raw
<Input />
:::

## Model

Input bisa ditambahkan `v-model`.

```vue
<script setup>
import { ref } from 'vue';

const text = ref('test');
</script>

<template>
  <Input v-model="text" />
  Input : {{ text }}
</template>
```

::: raw
<Input v-model="text" />
Input : {{ text }}
:::

## Ukuran

Input bisa diatur ukurannya dengan menambahkan props `size`, nilainya bisa `sm` dan `md`, default `md`.

```vue
<template>
  Input Small
  <Input size="sm" /><br />

  Input Medium
  <Input size="md" />
</template>
```

::: raw
Input Small
<Input size="sm" /><br>

Input Medium
<Input size="md" />
:::

## Lebar

Input bisa diatur lebarnya dengan menambahkan props `width`, nilainya bisa tiga macam:

1. `auto` (default), lebarnya auto.
2. `fit`, lebarnya menyesuaikan konten.
3. `full`, lebarnya memenuhi containernya.

```vue
<template>
  Input Auto
  <Input width="auto" /><br />

  Input Fit
  <Input width="fit" /><br />

  Input Full
  <Input width="full" />
</template>
```

::: raw
Input Auto
<Input width="auto" /><br>

Input Fit
<Input width="fit" /><br>

Input Full
<Input width="full" />
:::

## Textarea

Input bisa diubah menjadi textarea dengan menambahkan props `tag` nilainya `textarea`.

```vue
<Input tag="textarea" />
```

::: raw
<Input tag="textarea" />
:::

## Type, Placeholder, Disabed, dll

Input dapat menerima atribut bawaan elemen input seperti `type`, `placeholder`, `disabled`, `readonly`, dll.

```vue
<Input type="email" placeholder="Masukkan email" required />
```

::: raw
<Input type="email" placeholder="Masukkan email" required />
:::

## Event onInput, onChange, dll

Input dapat menerima event listener bawaan elemen input seperti `input`, `change`, `keyup`, dll.

```vue
<Input @change="onChange" @keyup="onKeyup" />
```

::: raw
<Input @change="onChange" @keyup="onKeyup" />
:::

## Menambahakan Debounce

Ketika nilai input berubah, komponen akan mengirimkan event `input`, kemudian `input-debounce` setelah 300ms.

```vue
<script setup>
const onInput = () => console.log('input');
</script>

<template>
  <Input @input="onInput" @input-debounce="onInputDebounce" />
</template>
```

::: raw
<Input @input="onInput" @input-debounce="onInputDebounce" />
:::

## Mengakses Elemen HTML Input

Untuk mengakses elemen HTML input di dalam komponen, gunakan template ref pada komponen, di dalamnya terdapatnya objek `input` yang merupakan elemen HTML input.

```vue
<script setup>
import { useTemplateRef, onMounted } from 'vue';

const input = useTemplateRef('input');

onMounted(() => input.value.input.focus());
</script>

<template>
  <Input ref="input" />
</template>
```

## Props

| Nama    | Type                          | Wajib? | Default | Fungsi                         |
| ------- | ----------------------------- | ------ | ------- | ------------------------------ |
| `tag`   | `enum('input', 'textarea')`   | :x:    | `input` | Menentukan input atau textarea |
| `size`  | `enum('sm', 'md')`            | :x:    | `md`    | Ukuran input                   |
| `width` | `enum('auto', 'fit', 'full')` | :x:    | `auto`  | Lebar input                    |

## Models

| Nama      | Type   | Fungsi              |
| --------- | ------ | ------------------- |
| `default` | `null` | Binding nilai input |

## Events

| Nama             | Payload | Kapan                           |
| ---------------- | ------- | ------------------------------- |
| `input`          | -       | Ketika ada input                |
| `input-debounce` | -       | Ketika ada input debounce 300ms |

## Exposed

| Nama    | Payload | Kapan             |
| ------- | ------- | ----------------- |
| `input` | -       | Elemen HTML input |
