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
