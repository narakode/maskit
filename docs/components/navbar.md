---
title: Navbar
---

<script setup>
import Navbar from '../../src/components/navbar/Navbar.vue'
import Button from '../../src/components/button/Button.vue'
</script>

# Navbar

Navbar adalah komponen untuk membuat navigasi bar yang berisi beberapa elemen seperti brand, daftar menu dan cta.

Ketika di mobile, navbar akan berubah menjadi sidebar.

## Contoh

- Nama brand dimasukkan ke props `brand`.
- Link brand dimasukkan ke props `brand-link`.
- Daftar menu dimasukkan ke props `menus`.
- Untuk cta, bisa menggunakan slot `end`.

```vue
<template>
  <Navbar
    brand="Maskit"
    brand-link="/"
    :menus="[
      { id: 'home', href: '/', name: 'Beranda' },
      { id: 'about', href: '/about', name: 'Tentang' },
      { id: 'contact', href: '/contact', name: 'Kontak' },
    ]"
  >
    <template #end>
      <Button size="sm">Login</Button>
    </template>
  </Navbar>
</template>
```

::: raw
<Navbar
brand="Maskit"
brand-link="/"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

## Menu Di Tengah

Untuk membuat daftar menu ditampilkan di tengah, tambahkan props `menu-align` dengan nilai `center`.

```vue{10}
<template>
    <Navbar
        brand="Maskit"
        brand-link="/"
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
        menu-align="center"
    >
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
brand="Maskit"
brand-link="/"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]"
menu-align="center">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

## Highlight Menu

Untuk menghighlight menu, tambahkan props `active-menu` dengan nilai `id` dari menu yang ingin dihighlight.

```vue{10}
<template>
    <Navbar
        brand="Maskit"
        brand-link="/"
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
        active-menu="about"
    >
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
brand="Maskit"
brand-link="/"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]"
active-menu="about">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

## Menghapus Brand

Brand bukanlah props yang wajib ada, jika tidak ada, maka brand tidak akan ditampilkan.

```vue{10}
<template>
    <Navbar
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
    >
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

## Kustomisasi

Navbar bisa dikustomisasi konten dan stylenya.

### Custom Container

Di dalam navbar terdapat komponen [Container](/components/container). Untuk mengkustomnya, tambahkan props `container-props` dalam bentuk objek. Props tersebut akan diteruskan ke komponen Container.

```vue{3}
<template>
    <Navbar
        :container-props="{ maxScreen: 'sm' }"
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
    >
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
:container-props="{ maxScreen: 'sm' }"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

### Custom Brand Slot

Brand default dirender dalam bentuk link, untuk mengubahnya, tambahkan slot `brand`. Brand otomatis akan dirender dari slot tersebut.

```vue{9-11}
<template>
    <Navbar
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
    >
        <template #brand>
            <Button>Brand</Button>
        </template>
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #brand>
<Button>Brand</Button>
</template>
<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

### Custom Style Menu

Untuk setiap menu link dapat dicustom dengan menambahkan props `custom-class`, nilainya objek dengan dua properti:

1. `menuDefault`, class untuk menu ketika tidak dihighlight.
2. `menuActive`, class untuk menu ketika sedang dihighlight.

```vue{3-6}
<template>
    <Navbar
        :custom-class="{
            menuDefault: '!text-red-600',
            menuActive: '!text-green-600'
        }"
        active-menu="contact"
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
    >
        <template #end>
            <Button size="sm">Login</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
:custom-class="{
menuDefault: '!text-red-600',
menuActive: '!text-green-600'
}"
active-menu="contact"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #end>
<Button color="primary">Login</Button>
</template>

</Navbar>
:::

### Custom Menu Slot

Menu default dirender dalam bentuk link, untuk mengubahnya, tambahkan slot `menu`. Setiap menu akan dirender dari slot tersebut. Slot tersebut menerima 3 payload:

1. `menu`, objek dari menu yang sedang dirender.
2. `classes: { menu }`, class styling bawaan.
3. `isActive`, apakah menu sedang aktif.

```vue{10-12}
<template>
    <Navbar
        active-menu="contact"
        :menus="[
            { id: 'home', href: '/', name: 'Beranda' },
            { id: 'about', href: '/about', name: 'Tentang' },
            { id: 'contact', href: '/contact', name: 'Kontak' }
        ]"
    >
        <template #menu="{ menu, isActive }">
            <Button :color="isActive ? 'primary' : 'error'">{{ menu.name }}</Button>
        </template>
    </Navbar>
</template>
```

::: raw
<Navbar
active-menu="contact"
:menus="[
{ id: 'home', href: '/', name: 'Beranda' },
{ id: 'about', href: '/about', name: 'Tentang' },
{ id: 'contact', href: '/contact', name: 'Kontak' }
]">

<template #menu="{ menu, isActive }">
<Button :color="isActive ? 'primary' : 'light'">{{ menu.name }}</Button>
</template>

</Navbar>
:::

## Props

| Nama              | Type                                          | Wajib? | Default                               | Fungsi                        |
| ----------------- | --------------------------------------------- | ------ | ------------------------------------- | ----------------------------- |
| `menus`           | `array`                                       | :x:    | `[]`                                  | Daftar menu                   |
| `brand`           | `string`                                      | :x:    | `md`                                  | Teks brand                    |
| `brand-link`      | `string`                                      | :x:    | `''`                                  | Link brand                    |
| `active-menu`     | `string`                                      | :x:    | `null`                                | Id menu yang sedang aktif     |
| `menu-align`      | `enum('left', 'center')`                      | :x:    | `left`                                | Posisi menu secara horizontal |
| `bordered`        | `bordered`                                    | :x:    | `true`                                | Ada border bottom di navbar   |
| `custom-class`    | `{ menuDefault: string, menuActive: string }` | :x:    | `{ menuDefault: '', menuActive: '' }` | Custom class ke menu          |
| `container-props` | `{}`                                          | :x:    | `{}`                                  | Custom props container        |

## Slots

| Nama    | Payload                                                           | Fungsi                                                           |
| ------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| `brand` | `{ classes: { brand: string } }`                                  | Menampilkan brand (Menonaktifkan brand dari props)               |
| `menu`  | `{ menu: string, isActive: boolean, classes: { menu: string }} }` | Menampilkan menu per item (Menonaktifkan default menu rendering) |
| `end`   | `null`                                                            | Menampilkan konten di ujung navbar                               |
