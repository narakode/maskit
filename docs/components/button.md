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

## Icon

Badge bisa diberi icon dengan props `icon`. Daftar icon bisa dilihat di [iconify icon sets](https://icon-sets.iconify.design/).

```vue
<Badge
  color="primary"
  icon="tabler:truck-delivery"
>Pesanan Sedang Dikirim</Badge>
```

::: raw
<Badge color="primary" icon="tabler:truck-delivery">Pesanan Sedang Dikirim</Badge>
:::

## Props

| Nama    | Type                                                          | Wajib? | Default   | Fungsi           |
| ------- | ------------------------------------------------------------- | ------ | --------- | ---------------- |
| `color` | `enum('primary', 'error', 'warning', 'success', 'secondary')` | :x:    | `primary` | Mengatur warna   |
| `icon`  | `string`                                                      | :x:    | -         | Menampilkan icon |
