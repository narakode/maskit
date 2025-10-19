---
title: Badge
---

<script setup>
import Spinner from '../../src/components/spinner/Spinner.vue'
import Badge from '../../src/components/badge/Badge.vue'
</script>

# Badge

Badge adalah komponen untuk menampilkan teks kecil dengan background warna. Misalnya untuk menampilkan teks status.

## Contoh

```vue
<Badge>Pesanan Diproses</Badge>
```

::: raw
<Badge>Pesanan Diproses</Badge>
:::

## Icon

Badge bisa diberi icon dengan props `icon`. Daftar icon bisa dilihat di [iconify icon sets](https://icon-sets.iconify.design/).

```vue
<Badge color="info" icon="tabler:truck-delivery">Pesanan Sedang Dikirim</Badge>
```

::: raw
<Badge color="info" icon="tabler:truck-delivery">Pesanan Sedang Dikirim</Badge>
:::

## Props

| Nama    | Type                                                       | Wajib? | Default | Fungsi           |
| ------- | ---------------------------------------------------------- | ------ | ------- | ---------------- |
| `color` | `enum('info', 'error', 'warning', 'success', 'secondary')` | :x:    | `info`  | Mengatur warna   |
| `icon`  | `string`                                                   | :x:    | -       | Menampilkan icon |
