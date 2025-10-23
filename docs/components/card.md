---
title: Card
---

<script setup>
import Card from '../../src/components/card/Card.vue'
import Button from '../../src/components/button/Button.vue'
</script>

# Card

Card adalah komponen untuk membuat box dengan konten judul, body dan footer.

## Contoh

```vue
<Card>Contoh</Card>
```

::: raw
<Card>Contoh</Card>
:::

## Header

Header di card ditambahkan dengan menambahkan props `title`, nilainya `string` nama judul card.

```vue
<Card title="Judul">Contoh</Card>
```

::: raw
<Card title="Judul">Contoh</Card>
:::

### Header Action

Action di header adalah konten yang akan ditampilkan di sebelah kanan header. Ditambahkan dengan slot `action`.

```vue
<script setup>
import { Card, Button } from 'maskit';
</script>

<template>
  <Card title="Judul">
    <template #action>
      <Button>Aksi</Button>
    </template>

    <p>Contoh</p>
  </Card>
</template>
```

::: raw
<Card title="Judul">
<template #action>
<Button>Aksi</Button>
</template>

<p>Contoh</p>
</Card>
:::

## Footer

Footer di card ditambahkan dengan menambahkan slot `footer`.

```vue
<script setup>
import { Card, Button } from 'maskit';
</script>

<template>
  <Card title="Judul">
    <p>Contoh</p>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button color="primary">Aksi</Button>
        <Button>Tutup</Button>
      </div>
    </template>
  </Card>
</template>
```

::: raw
<Card title="Judul">

<p>Contoh</p>

<template #footer>

<div class="flex justify-end gap-2">
    <Button color="primary">Aksi</Button>
    <Button>Tutup</Button>
</div>
</template>
</Card>
:::

## Custom Style

Beberapa cara custom style card.

### Tanpa Border

Untuk menghapus border, tambahkan props `bordered` dengan nilai `false`.

```vue
<Card title="Judul" :bordered="false">Contoh</Card>
```

::: raw
<Card title="Judul" :bordered="false">Contoh</Card>
:::

### Menghapus Border Header

Border bottom di header bisa dhapus dengan menambahkan props `striped` dengan nilai `false`.

```vue
<Card title="Judul" :striped="false">Contoh</Card>
```

::: raw
<Card title="Judul" :striped="false">Contoh</Card>
:::

### Tanpa Border Radius

Untuk menghapus border radius, tambahkan props `rounded` dengan nilai `false`.

```vue
<Card title="Judul" :rounded="false">Contoh</Card>
```

::: raw
<Card title="Judul" :rounded="false">Contoh</Card>
:::

### Tanpa Padding

Untuk menghapus padding di body, tambahkan props `paddless`.

```vue
<Card paddless>Contoh</Card>
```

::: raw
<Card paddless>Contoh</Card>
:::

### Menambahkan Shadow

Untuk menambahkan shadow, tambahkan props `has-shadow`.

```vue
<Card title="Judul" has-shadow>Contoh</Card>
```

::: raw
<Card title="Judul" has-shadow>Contoh</Card>
:::

### Dimmed

Dimmed adalah cara styling card menjadi berwarna lebih gelap, dibuat dengan menambahkan props `dimmed`.

```vue
<Card title="Judul" dimmed>Contoh</Card>
```

::: raw
<Card title="Judul" dimmed>Contoh</Card>
:::

## Props

| Nama               | Type      | Wajib? | Default | Fungsi                                              |
| ------------------ | --------- | ------ | ------- | --------------------------------------------------- |
| `bordered`         | `boolean` | :x:    | `true`  | Menambahkan border                                  |
| `rounded`          | `boolean` | :x:    | `true`  | Menambahkan border radius                           |
| `dimmed`           | `boolean` | :x:    | `false` | Menggelapkan warna background card                  |
| `paddless`         | `boolean` | :x:    | `false` | Menghapus padding di body                           |
| `has-shadow`       | `boolean` | :x:    | `false` | Menambahkan shadow                                  |
| `title`            | `string`  | :x:    | `null`  | Menambahkan judul dan header                        |
| `title-responsive` | `boolean` | :x:    | `false` | Membuat ukuran font judul header menjadi responsive |
| `title-tag`        | `any`     | :x:    | `h2`    | Mengubah tag judul header                           |
| `striped`          | `boolean` | :x:    | `true`  | Menambahkan border bottom di header                 |

## Slots

| Nama      | Payload | Fungsi                                     |
| --------- | ------- | ------------------------------------------ |
| `default` | `-`     | Menampilkan konten utama card              |
| `action`  | `-`     | Menampilkan konten di sebelah kanan header |
| `fooder`  | `-`     | Menampilkan konten di bagian bawah card    |
