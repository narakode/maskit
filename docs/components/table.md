---
title: Table
---

<script setup>
import Table from '../../src/components/table/Table.vue'
</script>

# Table

Table adalah komponen untuk membuat tabel.

## Contoh

Daftar kolom dimasukkan ke props `columns`, data tabel dimasukkan ke props `data`, item tabel dirender dengan slot `td`.

```vue
<template>
  <Table
    :columns="[
      { id: 'id', name: 'ID' },
      { id: 'name', name: 'Nama' },
    ]"
    :data="[
      { id: 1, name: 'Ahmad' },
      { id: 2, name: 'Riva' },
      { id: 3, name: 'Dean' },
    ]"
  >
    <template #td="{ item, classes }">
      <td :class="classes.td">{{ item.id }}</td>
      <td :class="classes.td">{{ item.name }}</td>
    </template>
  </Table>
</template>
```

::: raw

<Table
:columns="[{ id: 'id', name: 'ID' }, { id: 'name', name: 'Nama' }]"
:data="[{ id: 1, name: 'Ahmad' }, { id: 2, name: 'Riva' }, { id: 3, name: 'Dean' }]">
<template #td="{ item, classes }">
<td :class="classes.td">{{ item.id }}</td>
<td :class="classes.td">{{ item.name }}</td>
</template>
</Table>
:::

## Loading

Tabel bisa dibuat dalam keadaan loading dengan menambahkan props `loading`.

```vue{12}
<template>
    <Table
        :columns="[
            { id: 'id', name: 'ID' },
            { id: 'name', name: 'Nama' },
        ]"
        :data="[
            { id: 1, name: 'Ahmad' },
            { id: 2, name: 'Riva' },
            { id: 3, name: 'Dean' }
        ]"
        loading
    >
        <template #td="{ item, classes }">
            <td :class="classes.td">{{ item.id }}</td>
            <td :class="classes.td">{{ item.name }}</td>
        </template>
    </Table>
</template>
```

::: raw

<Table
:columns="[{ id: 'id', name: 'ID' }, { id: 'name', name: 'Nama' }]"
:data="[{ id: 1, name: 'Ahmad' }, { id: 2, name: 'Riva' }, { id: 3, name: 'Dean' }]"
loading>
<template #td="{ item, classes }">
<td :class="classes.td">{{ item.id }}</td>
<td :class="classes.td">{{ item.name }}</td>
</template>
</Table>
:::

## Menonaktifkan over

Hover baris tabel bisa dinonaktifkan dengan mengatur props `hoverable` menjadi `false`.

```vue{12}
<template>
    <Table
        :columns="[
            { id: 'id', name: 'ID' },
            { id: 'name', name: 'Nama' },
        ]"
        :data="[
            { id: 1, name: 'Ahmad' },
            { id: 2, name: 'Riva' },
            { id: 3, name: 'Dean' }
        ]"
        :hoverable="false"
    >
        <template #td="{ item, classes }">
            <td :class="classes.td">{{ item.id }}</td>
            <td :class="classes.td">{{ item.name }}</td>
        </template>
    </Table>
</template>
```

::: raw

<Table
:columns="[{ id: 'id', name: 'ID' }, { id: 'name', name: 'Nama' }]"
:data="[{ id: 1, name: 'Ahmad' }, { id: 2, name: 'Riva' }, { id: 3, name: 'Dean' }]"
:hoverable="false">
<template #td="{ item, classes }">
<td :class="classes.td">{{ item.id }}</td>
<td :class="classes.td">{{ item.name }}</td>
</template>
</Table>
:::

## Footer

Tabel bisa ditambah footer dengan slot `footer`.

```vue{18-23}
<template>
    <Table
        :columns="[
            { id: 'id', name: 'ID' },
            { id: 'name', name: 'Nama' },
        ]"
        :data="[
            { id: 1, name: 'Ahmad' },
            { id: 2, name: 'Riva' },
            { id: 3, name: 'Dean' }
        ]"
    >
        <template #td="{ item, classes }">
            <td :class="classes.td">{{ item.id }}</td>
            <td :class="classes.td">{{ item.name }}</td>
        </template>

        <template #footer="{ classes }">
            <tr :class="classes.tr">
                <th :class="[classes.td, 'text-right']">Total</th>
                <th :class="[classes.td, 'text-left']">150</th>
            </tr>
        </template>
    </Table>
</template>
```

::: raw

<Table
:columns="[{ id: 'id', name: 'ID' }, { id: 'name', name: 'Nama' }]"
:data="[{ id: 1, name: 'Ahmad' }, { id: 2, name: 'Riva' }, { id: 3, name: 'Dean' }]">
<template #td="{ item, classes }">
<td :class="classes.td">{{ item.id }}</td>
<td :class="classes.td">{{ item.name }}</td>
</template>
<template #footer="{ classes }">
<tr :class="classes.tr">
<th :class="[classes.td, 'text-right']">Total</th>
<th :class="[classes.td, 'text-left']">150</th>
</tr>
</template>
</Table>
:::

## Styling

Slot `td` dan `footer` menerima payload `classes` berupa objek dengan properti-properti berikut:

- `td`: Berisi class-class untuk styling td.
- `tr`: Berisi class-class untuk styling tr.

## Props

| Nama        | Type                                                                   | Wajib? | Default | Fungsi                             |
| ----------- | ---------------------------------------------------------------------- | ------ | ------- | ---------------------------------- |
| `columns`   | `{ id: string, name: string, textAlign: 'left', 'center', 'right' }[]` | :x:    | `[]`    | Daftar kolom tabel                 |
| `data`      | `array`                                                                | :x:    | `[]`    | Data tabel                         |
| `loading`   | `boolean`                                                              | :x:    | `false` | Menampilkan loading                |
| `hoverable` | `boolean`                                                              | :x:    | `true`  | Menambahkan hover pada baris tabel |

## Slots

| Nama     | Payload                                                | Fungsi        |
| -------- | ------------------------------------------------------ | ------------- |
| `td`     | `{ item: {}, classes: { td: string }, index: number }` | Render td     |
| `footer` | `{ classes: { tr: string, td: string } }`              | Render footer |
