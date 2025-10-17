---
title: Alert
---

<script setup>
import Alert from '../../src/components/alert/Alert.vue'
</script>

# Alert

Alert adalah komponen untuk menampilkan pesan notifikasi, informasi, dsb.

## Contoh

```vue
<Alert>Produk berhasil ditambahkan</Alert>
```

<Alert>Produk berhasil ditambahkan</Alert>

## Warna

Alert bisa diatur warnanya dengan props `color`, nilainya bisa `info`, `error`, `warning`, `success` dan `secondary`. Defaultnya `info`.

```vue
<Alert color="info">Info</Alert>
<Alert color="error">Error</Alert>
<Alert color="warning">Warning</Alert>
<Alert color="success">Success</Alert>
<Alert color="secondary">Secondary</Alert>
```

::: raw

<div class="space-y-4">
<Alert color="info">Info</Alert>
<Alert color="error">Error</Alert>
<Alert color="warning">Warning</Alert>
<Alert color="success">Success</Alert>
<Alert color="secondary">Secondary</Alert>
</div>
:::

## Loading

Alert bisa diberikan loading spinner dengan props `loading`, nilainya boolean. Defaultnya `false`.

```vue
<Alert loading>Loading</Alert>
```

::: raw
<Alert loading>Loading</Alert>
::: raw

## Tombol Close

Alert bisa diberikan tombol close di ujung dengan props `closable`, nilainya boolean. Defaultnya `false`. Ketika tombol close diklik, alert akan memicu event `close`.

```vue
<Alert closable @close="console.log('close alert')">
  Alert dapat diclose
</Alert>
```

::: raw
<Alert closable @close="console.log('close alert')">Alert dapat diclose</Alert>
::: raw

## Props

| Nama       | Type                                                       | Wajib? | Default | Fungsi                      |
| ---------- | ---------------------------------------------------------- | ------ | ------- | --------------------------- |
| `color`    | `enum('info', 'error', 'warning', 'success', 'secondary')` | :x:    | `info`  | Mengatur warna              |
| `loading`  | `boolean`                                                  | :x:    | `false` | Menampilkan loading spinner |
| `closable` | `boolean`                                                  | :x:    | `false` | Menampilkan tombol close    |

## Events

| Nama    | Payload | Kapan                       |
| ------- | ------- | --------------------------- |
| `close` | -       | Ketika tombol close ditekan |
