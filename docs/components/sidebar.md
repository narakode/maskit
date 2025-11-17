---
title: Sidebar
---

<script setup>
import { Icon } from '@iconify/vue';
import Sidebar from '../../src/components/sidebar/Sidebar.vue'
</script>

# Sidebar

Sidebar adalah komponen untuk menampilkan navigasi menu di sebelah kiri layar.

## Contoh

Sidebar terdiri dari dua elemen, brand dan daftar menu.

Brand dituliskan di props `brand`. Daftar menu dituliskan di props `menus` dalam bentuk array.

Untuk menghighlight menu yang sedang aktif, gunakan props `active-menu` dengan nilai `id` menu yang sedang aktif.

```vue
<template>
  <Sidebar
    brand="Maskit"
    :menus="[
      { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
      { id: 'product', name: 'Product', icon: 'tabler:archive' },
      { id: 'setting', name: 'Setting', icon: 'tabler:settings' },
    ]"
    active-menu="dashboard"
  />
</template>
```

::: raw
<Sidebar
brand="Maskit"
:menus="[
{ id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
{ id: 'product', name: 'Product', icon: 'tabler:archive' },
{ id: 'setting', name: 'Setting', icon: 'tabler:settings' },
]"
active-menu="dashboard"
class="static!"
/>
:::

## Brand Icon

Brand bisa ditambahkan icon dengan props `brand-icon`.

```vue{4}
<template>
    <Sidebar
        brand="Maskit"
        brand-icon="tabler:rocket"
        :menus="[
            { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
            { id: 'product', name: 'Product', icon: 'tabler:archive' },
            { id: 'setting', name: 'Setting', icon: 'tabler:settings' },
        ]"
        active-menu="dashboard"
    />
</template>
```

::: raw
<Sidebar
brand="Maskit"
brand-icon="tabler:rocket"
:menus="[
{ id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
{ id: 'product', name: 'Product', icon: 'tabler:archive' },
{ id: 'setting', name: 'Setting', icon: 'tabler:settings' },
]"
active-menu="dashboard"
class="static!"
/>
:::

## Custom Render Menu Item

Untuk mengucstom render menu item, gunakan slot `menu`. Slot ini menerima payload:

1. `menu`, objek menu yang sedang dirender.
2. `classes{ menu: string }`, class menu bawaan komponen.
3. `isActive`, status menu apakah aktif.

```vue{11-17}
<template>
    <Sidebar
        brand="Maskit"
        :menus="[
            { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard', count: 10 },
            { id: 'product', name: 'Product', icon: 'tabler:archive', count: 20 },
            { id: 'setting', name: 'Setting', icon: 'tabler:settings', count: 30 },
        ]"
        active-menu="dashboard"
    >
        <template #menu="{ menu, classes }">
            <button :class="classes.menu">
                <Icon :icon="menu.icon" class="size-5" />
                {{ menu.name }}
                <span>{{ menu.count }}</span>
            </button>
        </template>
    </Sidebar>
</template>
```

::: raw
<Sidebar
brand="Maskit"
:menus="[
{ id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard', count: 10 },
{ id: 'product', name: 'Product', icon: 'tabler:archive', count: 20 },
{ id: 'setting', name: 'Setting', icon: 'tabler:settings', count: 30 },
]"
active-menu="dashboard"
class="static!">
<template #menu="{ menu, classes }">
<button :class="[classes.menu, 'justify-between']">

<div class="flex items-center gap-2">
<Icon :icon="menu.icon" class="size-5" />
{{ menu.name }}
</div>
<span>{{ menu.count }}</span>
</button>
</template>
</Sidebar>
:::

## Props

| Nama          | Type                                           | Wajib?             | Default | Fungsi                      |
| ------------- | ---------------------------------------------- | ------------------ | ------- | --------------------------- |
| `brand`       | `string`                                       | :white_check_mark: | `''`    | Brand sidebar               |
| `brand-icon`  | `string`                                       | :x:                | `null`  | Menampilkan icon pada brand |
| `menus`       | `{ id: string, name: string, icon: string }[]` | :x:                | `[]`    | Daftar menu                 |
| `menu-active` | `string`                                       | :x:                | `null`  | Id menu yang sedang aktif   |

## Slots

| Nama   | Payload                                                                                              | Fungsi             |
| ------ | ---------------------------------------------------------------------------------------------------- | ------------------ |
| `menu` | `{ menu: { id: string, name: string, icon: string }, classes: { menu: string }, isActive: boolean }` | Custom render menu |
