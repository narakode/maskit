---
title: Description List
---

<script setup>
import Card from '../../src/components/card/Card.vue'
import Badge from '../../src/components/badge/Badge.vue'
import DescriptionList from '../../src/components/description-list/DescriptionList.vue'
</script>

# Description List

Description list adalah komponen untuk menampilkan suatu item pada daftar dengan struktur `label-value`. `label` adalah judul atau nama item, `value` adalah isi item.

## Contoh

```vue
<script setup>
import { Card, DescriptionList } from 'maskit';
</script>

<template>
  <Card>
    <DescriptionList label="Nama" value="Jamid" />
  </Card>
</template>
```

::: raw
<Card>
<DescriptionList label="Nama" value="Jamid" />
</Card>
:::

## Custom Value

Value bisa dalam bentuk selain string dengan menambahkan slot default.

```vue
<script setup>
import { Card, Buton, DescriptionList } from 'maskit';
</script>

<template>
  <Card>
    <DescriptionList label="Status">
      <Badge>Aktif</Badge>
    </DescriptionList>
  </Card>
</template>
```

::: raw
<Card>
<DescriptionList label="Status">
<Badge>Aktif</Badge>
</DescriptionList>
</Card>
:::

## Props

| Nama    | Type     | Wajib?             | Default | Fungsi                 |
| ------- | -------- | ------------------ | ------- | ---------------------- |
| `label` | `string` | :white_check_mark: | `null`  | Menambahkan judul item |
| `value` | `string` | :x:                | `null`  | Menambahkan isi item   |

## Slots

| Nama      | Payload | Fungsi                                                       |
| --------- | ------- | ------------------------------------------------------------ |
| `default` | `-`     | Menampilkan isi item, meng-override nilai dari props `value` |
