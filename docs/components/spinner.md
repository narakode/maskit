---
title: Spinner
---

<script setup>
import Spinner from '../../src/components/spinner/Spinner.vue'
</script>

# Spinner

Spinner adalah komponen untuk menampilkan icon loader yang beranimasi spin. Biasa digunakan ketika proses sedang loading.

## Contoh

```vue
<Spinner />
```

::: raw
<Spinner />
:::

## Warna

Spinner bisa diatur warnanya dengan props `color`, nilainya bisa `info`, `error`, `warning`, `success` dan `secondary`. Defaultnya `info`.

```vue
<Spinner color="info" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="success" />
<Spinner color="secondary" />
```

::: raw
<Spinner color="info" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="success" />
<Spinner color="secondary" />
:::

## Ukuran

Spinner bisa diatur ukurannya dengan props `size`, nilainya bisa `md` (sedang) dan `lg` (besar). Defaultnya `md`.

```vue
<Spinner size="md" />
<Spinner size="lg" />
```

::: raw
<Spinner size="md" />
<Spinner size="lg" />
:::

Atau bisa juga dioverride dengan menambahkan class ke component, misalnya `w-20 h-20`.

```vue
<Spinner class="w-20 h-20" />
```

::: raw
<Spinner class="w-20 h-20" />
:::

## Props

| Nama    | Type                                                       | Wajib? | Default | Fungsi          |
| ------- | ---------------------------------------------------------- | ------ | ------- | --------------- |
| `color` | `enum('info', 'error', 'warning', 'success', 'secondary')` | :x:    | `info`  | Mengatur warna  |
| `size`  | `enum('md', 'lg')`                                         | :x:    | `md`    | Mengatur ukuran |
