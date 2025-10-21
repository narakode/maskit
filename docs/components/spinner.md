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

Spinner bisa diatur warnanya dengan props `color`, nilainya bisa `primary`, `error`, `warning`, `success` dan `secondary`. Defaultnya `primary`.

```vue
<Spinner color="primary" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="success" />
<Spinner color="secondary" />
```

::: raw
<Spinner color="primary" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="success" />
<Spinner color="secondary" />
:::

### Versi Terang

Warna bisa diubah menjadi terang dengan menambahkan `light-` pada props `color`.

```vue
<Spinner color="light-primary" />
<Spinner color="light-error" />
<Spinner color="light-warning" />
<Spinner color="light-success" />
<Spinner color="light-secondary" />
```

::: raw
<Spinner color="light-primary" />
<Spinner color="light-error" />
<Spinner color="light-warning" />
<Spinner color="light-success" />
<Spinner color="light-secondary" />
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

| Nama    | Type                                                                                        | Wajib? | Default   | Fungsi                      |
| ------- | ------------------------------------------------------------------------------------------- | ------ | --------- | --------------------------- |
| `color` | `enum('primary', 'error', 'warning', 'success', 'secondary')`                               | :x:    | `primary` | Mengatur warna              |
| `color` | `enum('light-primary', 'light-error', 'light-warning', 'light-success', 'light-secondary')` | :x:    | `primary` | Mengatur warna versi terang |
| `size`  | `enum('md', 'lg')`                                                                          | :x:    | `md`      | Mengatur ukuran             |
