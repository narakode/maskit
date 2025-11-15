---
title: Select Search
---

<script setup>
import { ref } from 'vue'
import SelectSearch from '../../src/components/select-search/SelectSearch.vue'
</script>

# Select Search

Select search adalah komponen input yang bisa memiliki opsi dropdown.

## Contoh

Opsi dropdown disediakan di props `items` dalam bentuk array.

```vue{3-7}
<template>
    <SelectSearch
        :items="[
            { id: 1, name: 'Opsi 1' },
            { id: 2, name: 'Opsi 2' },
            { id: 3, name: 'Opsi 3' }
        ]"
        placeholder="Pilih Opsi"
    />
</template>
```

::: raw
<SelectSearch
:items="[
{ id: 1, name: 'Opsi 1' },
{ id: 2, name: 'Opsi 2' },
{ id: 3, name: 'Opsi 3' }
]"
placeholder="Pilih Opsi"
/>
:::
