---
title: Container
---

<script setup>
import Container from '../../src/components/container/Container.vue'
</script>

# Container

Container adalah elemen untuk meletakan konten dengan rapi yang dibungkus dengan maks ukuran lebar tertentu yang menyesuaikan ukuran layar.

## Contoh

```vue
<Container>Konten</Container>
```

::: raw
<Container>Konten</Container>
:::

## Custom Max Screen

Max screen container bisa dicustom agar maksimal lebarnya bisa selebar ukuran layar tertentu, menggunakan props `max-screen`, nilainya bisa `sm`, `md`, `lg`, `xl`. Default `null`.

```vue
<Container max-screen="sm">Konten</Container>
```

::: raw
<Container max-screen="sm">Konten</Container>
:::

## Custom Tag

Default tag container adalah `div`, bisa diubah dengan props `tag`, nilainya string tag HTML atau komponen.

```vue
<Container tag="article">Konten</Container>
```

::: raw
<Container tag="article">Konten</Container>
:::

## Props

| Nama        | Type                           | Wajib? | Default | Fungsi                                                         |
| ----------- | ------------------------------ | ------ | ------- | -------------------------------------------------------------- |
| `max-sceen` | `enum('sm', 'md', 'lg', 'xl')` | :x:    | `null`  | Menentukan maksimal ukuran lebar selebar ukuran layar tertentu |
| `tag`       | `any`                          | :x:    | `div`   | Mengubah tag yang digunakan                                    |
