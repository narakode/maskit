---
title: Dropdown
---

<script setup>
import Dropdown from '../../src/components/dropdown/Dropdown.vue'
import Button from '../../src/components/button/Button.vue'

const options = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
];
</script>

# Dropdown

Dropdown adalah komponen untuk menampilkan konten yang munculnya setelah ditrigger oleh event tertentu, biasanya ketika diklik.

## Contoh

```vue
<template>
  <Dropdown>
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #default="{ classes }">
      <p :class="classes.option">Konten Dropdown</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown>
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #default="{ classes }">

<p :class="classes.option">Konten Dropdown</p>
</template>
</Dropdown>
:::

## Trigger

Trigger adalah cara untuk membuka dan menutup dropdown. Trigger ditambahkan di slot `trigger`, yang menerima payload fungsi `toggle`, fungsi tersebut gunanya untuk membuka atau menutup dropdown.

```vue{3-5}
<template>
  <Dropdown>
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #default="{ classes }">
      <p :class="classes.option">Konten Dropdown</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown>
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #default="{ classes }">

<p :class="classes.option">Konten Dropdown</p>
</template>
</Dropdown>
:::

## Konten Dropdown

Konten dropdown ditampilkan dari slot `default`.

Slot `default` menerima payload `classes`, objek berisi class tailwind untuk styling dropdown, penjelasannya di [styling dropdown](#styling-dropdown).

```vue{7-9}
<template>
  <Dropdown>
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #default="{ classes }">
      <p :class="classes.option">Ini adalah isi dropdown</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown>
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #default="{ classes }">

  <p :class="classes.option">Ini adalah isi dropdown</p>
</template>
</Dropdown>
:::

## Menampilkan Opsi

Dropdown dapat digunakan untuk menampilkan opsi dari array dengan props `options`. Opsi akan ditampilkan di dalam slot `option`. Slot `option` menerima dua payload:

1. `option`, objek berisi opsi yang sedang ditampilkan, propertinya `id` dan `name`.
2. `classes`, objek berisi class tailwind untuk styling dropdown, penjelasannya di [styling dropdown](#styling-dropdown).

```vue{15-17}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options">
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #option="{ option, classes }">

<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Menampilkan Header

Dropdown bisa diberi header dengan slot `header`. Slot `header` menerima payload `classes`, objek berisi class tailwind untuk styling dropdown, penjelasannya di [styling dropdown](#styling-dropdown).

```vue{15-17}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #header="{ classes }">
      <p :class="classes.header">jhon@gmail.com</p>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options">
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #header="{ classes }">

  <p :class="classes.header">jhon@gmail.com</p>
</template>
<template #option="{ option, classes }">
<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Mengubah Posisi Dropdown

Dropdown secara default ditampilkan dari kiri.

Untuk mengubahnya, tambahkan props `custom-class`, tipenya objek, dengan properti `content`. Isi dengan class tailwind `left-auto right-0` untuk mengubah posisi dropdown menjadi di kanan.

```vue{10}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options" :custom-class="{ content: 'left-auto right-0' }">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Klik tombol ini untuk membuka dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options" :custom-class="{ content: 'left-auto right-0' }">
<template #trigger="{ toggle }">
<Button @click="toggle">Klik tombol ini untuk membuka dropdown</Button>
</template>

<template #option="{ option, classes }">

  <p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Mengubah Lebar Dropdown

Dropdown secara default diset minimal lebarnya dengan class `min-w-40`, bisa diubah dengan cara berikut:

1. Tambahkan props `override-width`, untuk menonaktifkan default lebar.
2. Tambahkan props `custom-class`, tipenya objek, dengan properti `content`. Isi dengan class tailwind `w-[lebar]` atau `min-w-[lebar]`.

```vue{12-13}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown
    :options="options"
    override-width
    :custom-class="{ content: 'w-full' }"
  >
    <template #trigger="{ toggle }">
      <Button @click="toggle">Klik tombol ini untuk membuka dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown
  :options="options" override-width :custom-class="{ content: 'w-full' }">
<template #trigger="{ toggle }">
<Button @click="toggle">Klik tombol ini untuk membuka dropdown</Button>
</template>

<template #option="{ option, classes }">
<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Styling Dropdown

Setiap slot di komponen dropdown (`option`, `default`, `header`) menerima payload `classes`, yaitu objek yang properti-propertinya berisi class tailwind untuk styling dropdown. Isinya:

- `classes.header`, class-class untuk style header dropdown.
- `classes.option`, class-class untuk style isi dropdown.

## Props

| Nama             | Type                          | Wajib? | Default | Fungsi                                               |
| ---------------- | ----------------------------- | ------ | ------- | ---------------------------------------------------- |
| `options`        | `{ id: any, name: string }[]` | :x:    | `null`  | Menampilkan opsi di dalam dropdown                   |
| `override-width` | `boolean`                     | :x:    | `false` | Menonaktifkan default lebar                          |
| `custom-class`   | `{ content: '' }`             | :x:    | `{}`    | Menambahkan custom class ke elemen di dalam dropdown |

## Slots

| Nama      | Payload                           | Fungsi                       |
| --------- | --------------------------------- | ---------------------------- |
| `default` | `{ classes: { option, header } }` | Menampilkan konten dropdown  |
| `option`  | `{ classes: { option, header } }` | Menampilkan opsi dropdown    |
| `trigger` | `{ toggle }`                      | Menampilkan trigger dropdown |
| `header`  | `{ classes: { option, header } }` | Menampilkan header           |
