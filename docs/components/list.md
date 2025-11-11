---
title: List
---

<script setup>
import List from '../../src/components/list/List.vue'
import Button from '../../src/components/button/Button.vue'
</script>

# List

List adalah komponen untuk menampilkan daftar item dalam bentuk card.

## Contoh

Dafar item ditambahkan dengan props `data` berupa array. Item ditampilkan dengan slot `item`.

```vue
<template>
  <List
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </List>
</template>
```

::: raw
<template>
<List
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #item="{ item }">
{{ item.name }}
</template>
</List>
</template>
:::

## Menambahkan Header

Untuk menambahkan header, gunakan slot `header`.

Slot ini menerima objek `classes` untuk [styling](#styling-list).

```vue{11-15}
<template>
  <List
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #header="{ classes }">
      <header :class="classes.item">
        <h2 class="font-bold text-lg">Judul</h2>
      </header>
    </template>
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </List>
</template>
```

::: raw
<List
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #header="{ classes }">

<header :class="classes.item">
<h2 class="font-bold text-lg">Judul</h2>
</header>
</template>
<template #item="{ item }">
{{ item.name }}
</template>
</List>
:::

## Menambahkan Footer

Untuk menambahkan footer, gunakan slot `footer`.

Slot ini menerima objek `classes` untuk [styling](#styling-list).

```vue{14-18}
<template>
  <List
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
    <template #footer="{ classes }">
      <footer :class="classes.item">
        <Button>Simpan</Button>
      </footer>
    </template>
  </List>
</template>
```

::: raw
<List
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #item="{ item }">
{{ item.name }}
</template>
<template #footer="{ classes }">

<footer :class="classes.item">
<Button>Simpan</Button>
</footer>
</template>

</List>
:::

## Menambahkan Hover Item

Untuk menambahkan hover pada item, tambahkan props `hoverable`.

```vue{3}
<template>
  <List
    hoverable
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </List>
</template>
```

::: raw
<List
hoverable
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #item="{ item }">
{{ item.name }}
</template>
</List>
:::

## Mengubah Ukuran Item

Untuk mengubah ukuran item, tambahkan props `size` dengan nilai `sm/md/lg`. Default `md`.

```vue{3}
<template>
  <List
    size="sm"
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </List>
</template>
```

::: raw
<List
size="sm"
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #item="{ item }">
{{ item.name }}
</template>
</List>
:::

## Menonaktifkan Divider

Untuk menonaktifkan divider, tambahkan props `striped` dengan nilai `false`.

```vue{3}
<template>
  <List
    :striped="false"
    :data="[
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </List>
</template>
```

::: raw
<List
:striped="false"
:data="[
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' }
]">
<template #item="{ item }">
{{ item.name }}
</template>
</List>
:::

## Mengubah Pesan Kosong

Ketika tidak ada data, maka akan muncul teks pesan kosong.

Untuk mengubah teks pesan kosong, tambahkan props `empty-message` berisi string pesan kosong.

```vue
<template>
  <List empty-message="Tidak ada data" />
</template>
```

::: raw
<List
    empty-message="Tidak ada data"
/>
:::

## Styling List

Untuk slot `header` dan `footer`, keduanya akan mendapatkan object `classes` yang berisi class tailwind dengan properti:

- `item`, berisi style seperti style-nya item.

## Props

| Nama            | Type                     | Wajib? | Default                     | Fungsi                               |
| --------------- | ------------------------ | ------ | --------------------------- | ------------------------------------ |
| `data`          | `array`                  | :x:    | `[]`                        | Daftar item                          |
| `size`          | `enum('sm', 'md', 'lg')` | :x:    | `md`                        | Ukuran list                          |
| `hoverable`     | `boolean`                | :x:    | `false`                     | Menambahkan efek hover item          |
| `striped`       | `boolean`                | :x:    | `true`                      | Menambahkan garis divider antar item |
| `empty-message` | `string`                 | :x:    | `There's nothing here yet.` | Pesan ketika data kosong             |

## Slots

| Nama      | Payload                 | Fungsi                                                  |
| --------- | ----------------------- | ------------------------------------------------------- |
| `item`    | `{ item }`              | Menampilkan per item                                    |
| `header`  | `{ classes: { item } }` | Menampilkan header                                      |
| `footer`  | `{ classes: { item } }` | Menampilkan footer                                      |
| `default` | `{ classes: { item } }` | Menampilkan konten dan menghapus default rendering item |
