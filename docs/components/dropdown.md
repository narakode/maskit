---
title: Dropdown
---

<script setup>
import Dropdown from '../../src/components/dropdown/Dropdown.vue'
import Button from '../../src/components/button/Button.vue'

const options = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
];
</script>

# Dropdown

Dropdown adalah komponen untuk menampilkan konten yang munculnya setelah ditrigger oleh event tertentu, biasanya ketika diklik.

## Contoh

```vue
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #option="{ option, classes }">

<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Trigger

Trigger adalah cara untuk membuka dan menutup dropdown. Trigger ditambahkan di slot `trigger`, yang menerima payload fungsi `toggle`, fungsi tersebut gunanya untuk membuka atau menutup dropdown.

```vue{11-13}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #option="{ option, classes }">

<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::

## Menampilkan Opsi

Setiap opsi di dropdown akan ditampilkan dengan menggunakan slot `option`. Slot `option` menerima dua payload:

1. `option`, objek berisi opsi yang sedang ditampilkan, propertinya `id` dan `name`.
2. `classes`, objek berisi class tailwind bawaan dropdown, propertinya ada `option` yang bernilai class tailwind untuk memberikan style pada opsi.

```vue{15-17}
<script setup>
const options = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
];
</script>

<template>
  <Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
    <template #trigger="{ toggle }">
      <Button @click="toggle">Toggle Dropdown</Button>
    </template>

    <template #option="{ option, classes }">
      <p :class="classes.option">{{ option.name }}</p>
    </template>
  </Dropdown>
</template>
```

::: raw
<Dropdown :options="options" :custom-class="{ content: 'top-12 left-0' }">
<template #trigger="{ toggle }">
<Button @click="toggle">Toggle Dropdown</Button>
</template>
<template #option="{ option, classes }">

<p :class="classes.option">{{ option.name }}</p>
</template>
</Dropdown>
:::
