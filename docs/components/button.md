---
title: Button
---

<script setup>
import Badge from '../../src/components/badge/Badge.vue'
import Button from '../../src/components/button/Button.vue'
</script>

# Button

Button adalah komponen untuk menampilkan tombol dengan variasi warna, ukuran dan icon.

## Contoh

```vue
<Button>Simpan</Button>
```

::: raw
<Button>Simpan</Button>
:::

## Warna

Button bisa diatur warnanya dengan props `color`, nilainya bisa `primary`, `error`, `warning`, `success`, `light` dan `secondary`. Defaultnya `primary`.

```vue
<Button color="primary">Primary</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
<Button color="secondary">Secondary</Button>
<Button color="light">Light</Button>
```

::: raw

<div class="space-x-2">
<Button color="primary">Primary</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
<Button color="secondary">Secondary</Button>
<Button color="light">Light</Button>
</div>
:::

### Transparan

Button juga bisa dibuat transparan dengan props `transparent`, nilainya `boolean`. Default `false`.

```vue
<Button color="primary" transparent>Primary</Button>
<Button color="error" transparent>Error</Button>
<Button color="warning" transparent>Warning</Button>
<Button color="success" transparent>Success</Button>
<Button color="secondary" transparent>Secondary</Button>
<Button color="light" transparent>Light</Button>
```

::: raw

<div class="space-x-2">
<Button color="primary" transparent>Primary</Button>
<Button color="error" transparent>Error</Button>
<Button color="warning" transparent>Warning</Button>
<Button color="success" transparent>Success</Button>
<Button color="secondary" transparent>Secondary</Button>
<Button color="light" transparent>Light</Button>
</div>
:::

### Border

Button juga bisa diberi border dengan props `bordered`, nilainya `boolean`. Default `false`.

```vue
<Button color="primary" transparent bordered>Primary</Button>
<Button color="error" transparent bordered>Error</Button>
<Button color="warning" transparent bordered>Warning</Button>
<Button color="success" transparent bordered>Success</Button>
<Button color="secondary" transparent bordered>Secondary</Button>
<Button color="light" transparent bordered>Light</Button>
```

::: raw

<div class="space-x-2">
<Button color="primary" transparent bordered>Primary</Button>
<Button color="error" transparent bordered>Error</Button>
<Button color="warning" transparent bordered>Warning</Button>
<Button color="success" transparent bordered>Success</Button>
<Button color="secondary" transparent bordered>Secondary</Button>
<Button color="light" transparent bordered>Light</Button>
</div>
:::

## Ukuran

Button bisa diatur ukurannya dengan props `size`, nilainya bisa `sm`, `md` dan `lg`. Defaultnya `md`.

```vue
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

::: raw

<div class="space-x-2">
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
</div>
:::

### Responsive

Button bisa dibuat responsive dengan props `responsive`, nilainya `boolean`. Default `false`.

```vue
<Button size="lg" responsive>Large</Button>
```

::: raw

<div class="space-x-2">
<Button size="lg" responsive>Large</Button>
</div>
:::

### Width

Button bisa diatur lebarnya dengan props `width`, nilainya `auto` atau `full`. Default `auto`.

```vue
<Button width="full">Fullwidth</Button>
```

::: raw

<div class="space-x-2">
<Button width="full">Fullwidth</Button>
</div>
:::

## State

Button dapat memiliki dua state tambahan, `disabled` dan `loading`.

### Disabled

Button bisa dibuat disabled dengan props `disabled`, nilainya `boolean`. Default `false`.

```vue
<Button disabled>Simpan</Button>
```

::: raw
<Button disabled>Simpan</Button>
:::

### Loading

Button bisa dibuat loading dengan props `loading`, nilainya `boolean`. Default `false`. Ketika loading, akan muncul icon spinner dan button menjadi disabled.

```vue
<Button loading>Simpan</Button>
```

::: raw
<Button loading>Simpan</Button>
:::

## Icon

Button bisa diberi icon dengan props `icon`. Daftar icon bisa dilihat di [iconify icon sets](https://icon-sets.iconify.design/).

```vue
<Button icon="tabler:check">Simpan</Button>
```

::: raw
<Button icon="tabler:check">Simpan</Button>
:::

### Posisi Icon

Posisi icon default di sebelah kiri (`start`), bisa diubah ke sebelah kanan dengan props `icon-position`. Nilainya `start` (kiri) dan `end` (kanan).

```vue
<Button icon="tabler:arrow-right" icon-position="end">Simpan</Button>
```

::: raw
<Button icon="tabler:arrow-right" icon-position="end">Simpan</Button>
:::

### Icon Tanpa Teks

Jika button hanya berisi icon, tambahkan props `icon-only` agar bentuk button menjadi persegi. Nilainya `boolean`, default `false`.

```vue
<Button icon="tabler:rocket" icon-only />
```

::: raw
<Button icon="tabler:rocket" icon-only></Button>
:::

## Kustomisasi

Button bisa dicustom nama tag-nya dan menonaktifkan warnanya.

### Mengubah Nama Tag

Untuk mengubah nama tag, gunakan props `tag`, nilainya bisa string nama tag atau component. Default `button`.

Atribut lain yang tidak ada diprops juga akan inherit ke Button.

```vue
<Button tag="a" href="/" icon="tabler:download">Download</Button>
```

::: raw
<Button tag="a" href="/" icon="tabler:download">Download</Button>
:::

### Menonaktifkan Warna

Jika ingin memberikan warna dengan class sendiri, agar tidak bentrok, nonaktifkan dulu warna bawaan button dengan props `override-color`. Nilainya `boolean`, default `false`.

```vue
<Button
  override-color
  class="bg-red-900 text-yellow-400"
>Red Yellow Button</Button>
```

::: raw
<Button override-color class="bg-red-900 text-yellow-400">Red Yellow Button</Button>
:::

## Props

| Nama             | Type                                                                   | Wajib? | Default     | Fungsi                                       |
| ---------------- | ---------------------------------------------------------------------- | ------ | ----------- | -------------------------------------------- |
| `color`          | `enum('primary', 'error', 'warning', 'success', 'secondary', 'light')` | :x:    | `secondary` | Mengatur warna                               |
| `transparent`    | `boolean`                                                              | :x:    | `false`     | Mengatur background menjadi transparan       |
| `bordered`       | `boolean`                                                              | :x:    | `false`     | Menambahkan border                           |
| `size`           | `enum('sm', 'md', 'lg')`                                               | :x:    | `md`        | Mengatur ukuran                              |
| `responsive`     | `boolean`                                                              | :x:    | `false`     | Mengatur ukuran menjadi responsive           |
| `width`          | `enum('auto', 'full')`                                                 | :x:    | `auto`      | Mengatur lebar                               |
| `disabled`       | `boolean`                                                              | :x:    | `false`     | Menonaktifkan button                         |
| `loading`        | `boolean`                                                              | :x:    | `false`     | Menonaktifkan button dan menambahkan spinner |
| `icon`           | `string`                                                               | :x:    | `null`      | Menampilkan icon                             |
| `icon-position`  | `enum('start', 'end')`                                                 | :x:    | `auto`      | Mengatur posisi icon                         |
| `icon-only`      | `boolean`                                                              | :x:    | `false`     | Mengatur ukuran menjadi persegi              |
| `tag`            | `any`                                                                  | :x:    | `button`    | Mengatur tag button                          |
| `override-color` | `boolean`                                                              | :x:    | `false`     | Menonaktifkan warna bawaan                   |
