---
title: Select Search
---

<script setup>
import { ref, computed } from 'vue'
import SelectSearch from '../../src/components/select-search/SelectSearch.vue'

const search1 = ref(null)
const search3 = ref(null)
const selected1 = ref(null)
const visible2 = ref(10)

const items1 = computed(() => {
    return [
        { id: 1, name: 'Opsi 1' },
        { id: 2, name: 'Opsi 2' },
        { id: 3, name: 'Opsi 3' }
    ].filter(item => {
        if (!search1.value) {
            return true
        }

        return item.name.toLowerCase().includes(search1.value.toLowerCase())
    })
})

const items2 = computed(() => {
    return Array.from({ length: visible2.value }, (_, i) => {
        return {
            id: i + 1,
            name: `Opsi ${i + 1}`
        }
    })
})

const items3 = computed(() => {
    return [
        { id: 1, name: 'Opsi 1' },
        { id: 2, name: 'Opsi 2' },
        { id: 3, name: 'Opsi 3' }
    ].filter(item => {
        if (!search3.value) {
            return true
        }

        return item.name.toLowerCase().includes(search3.value.toLowerCase())
    })
})

function onScrollBottom2() {
    visible2.value += 5
}
</script>

# Select Search

Select search adalah komponen input yang bisa memiliki opsi dropdown.

## Contoh

Opsi dropdown disediakan di props `items` dalam bentuk array.

```vue
<script setup>
const selected = ref(null);
</script>

<template>
  <SelectSearch
    :items="[
      { id: 1, name: 'Opsi 1' },
      { id: 2, name: 'Opsi 2' },
      { id: 3, name: 'Opsi 3' },
    ]"
    v-model="selected"
    placeholder="Pilih Opsi"
  />
  {{ selected }}
</template>
```

::: raw
<SelectSearch
:items="[
{ id: 1, name: 'Opsi 1' },
{ id: 2, name: 'Opsi 2' },
{ id: 3, name: 'Opsi 3' }
]"
v-model="selected1"
placeholder="Pilih Opsi"
/>
{{ selected1 }}
:::

## Filtering

Apa yang diketikkan di input bisa dibinding ke model `search`. Ketika ada perubahan input, event `search` akan ditrigger.

```vue{28-29}
<script setup>
import { ref, computed } from 'vue'

const search = ref(null)
const items = computed(() => {
    return [
        { id: 1, name: 'Opsi 1' },
        { id: 2, name: 'Opsi 2' },
        { id: 3, name: 'Opsi 3' }
    ].filter(item => {
        if (!search.value) {
            return true
        }

        return item.name.toLowerCase().includes(search.value.toLowerCase())
    })
})

function onSearch() {
    console.log(search.value)
}
</script>

<template>
    <SelectSearch
        :items="items"
        placeholder="Pilih Opsi"
        v-model:search="search"
        @search="onSearch"
    />
</template>
```

::: raw
<SelectSearch
    :items="items1"
    placeholder="Pilih Opsi"
    v-model:search="search1"
/>
:::

## Infinite Scroll

Opsi dropdown memiliki makimal tinggi `200px`, ketika tingginya melebihi itu maka muncull scrollbar, ketika scrollbar mencapai paling bawah, event `scroll-bottom` akan ditrigger. Ini bisa diunakan untuk membuat infinite scrolling.

```vue{23}
<script setup>
import { ref, computed } from 'vue'

const visible = ref(10)
const items = computed(() => {
    return Array.from({ length: visible.value }, (_, i) => {
        return {
            id: i + 1,
            name: `Opsi ${i + 1}`
        }
    })
})

function onScrollBottom() {
    visible.value += 5
}
</script>

<template>
    <SelectSearch
        :items="items"
        placeholder="Pilih Opsi"
        @scroll-bottom="onScrollBottom"
    />
</template>
```

::: raw
<SelectSearch
:items="items2"
placeholder="Pilih Opsi"
@scroll-bottom="onScrollBottom2"
/>
:::

## Tombol Tambah Ketika Search Tidak Ditemukan

Tombol tambah ketika search tidak ditemukan bisa ditampilkan dengan menambahkan propos `with-create-button`. Ketika tombol tersebut diklik, event `create` akan ditrigger.

```vue{24,27}
<script setup>
import { ref, computed } from 'vue'

const search = ref(null)
const items = computed(() => {
    return [
        { id: 1, name: 'Opsi 1' },
        { id: 2, name: 'Opsi 2' },
        { id: 3, name: 'Opsi 3' }
    ].filter(item => {
        if (!search.value) {
            return true
        }

        return item.name.toLowerCase().includes(search.value.toLowerCase())
    })
})
</script>

<template>
    <SelectSearch
        :items="items"
        placeholder="Pilih Opsi"
        with-create-button
        v-model:search="search"
        @search="onSearch"
        @create="onCreate"
    />
</template>
```

::: raw
<SelectSearch
:items="items3"
placeholder="Pilih Opsi"
with-create-button
v-model:search="search3"
/>
:::

## Custom Tampilan Opsi Dropdown

Opsi dropdown bisa dicustom tampilannya dengan slot `item`. Slot ini menerima payload `item` berupa objek opsi yang sedang ditampilkan.

```vue{24,27}
<template>
    <SelectSearch
        :items="[
            { id: 1, name: 'Bronze', detail: 'Recomended' },
            { id: 2, name: 'Silver', detail: 'Terbaik' },
            { id: 3, name: 'Gold', detail: 'Business Class' }
        ]"
        placeholder="Pilih Paket"
    >
        <template #item="{ item }">
            <p>
                <strong>{{ item.name }}</strong>

                (<span class="text-blue-600">{{ item.detail }}</span>)
            </p>
        </template>
    </SelectSearch>
</template>
```

::: raw
<SelectSearch
:items="[
{ id: 1, name: 'Bronze', detail: 'Recomended' },
{ id: 2, name: 'Silver', detail: 'Terbaik' },
{ id: 3, name: 'Gold', detail: 'Business Class' }
]"
placeholder="Pilih Paket"

> <template #item="{ item }">

<p>
<strong>{{ item.name }}</strong>
(<span class="text-blue-600">{{ item.detail }}</span>)
</p>
</template>
</SelectSearch>
:::

## Props

| Nama                 | Type                          | Wajib? | Default | Fungsi                                                         |
| -------------------- | ----------------------------- | ------ | ------- | -------------------------------------------------------------- |
| `items`              | `{ id: any, name: string }[]` | :x:    | `[]`    | Daftar opsi                                                    |
| `loading`            | `boolean`                     | :x:    | `false` | Menampilkan loading spinner di input                           |
| `with-create-button` | `boolean`                     | :x:    | `false` | Menampilkan tomboh tambah search ketika search tidak ditemukan |
| `placeholder`        | `string`                      | :x:    | `''`    | Placeholder input                                              |
| `required`           | `boolean`                     | :x:    | `false` | Menambahkan atribut required ke input                          |

## Models

| Nama      | Type                            | Fungsi                |
| --------- | ------------------------------- | --------------------- |
| `default` | `object{id: any, name: string}` | Opsi terpilih         |
| `search`  | `string`                        | Nilai input pencarian |

## Events

| Nama            | Payload | Kapan                                                   |
| --------------- | ------- | ------------------------------------------------------- |
| `opened`        | -       | Ketika dropdown dibuka                                  |
| `search`        | -       | Ketika ada input pencarian                              |
| `change`        | -       | Ketika ada opsi terpilih                                |
| `scroll-bottom` | -       | Ketika dropdown discroll sampai bawah                   |
| `create`        | -       | Ketika search yang tidak ditemukan diklik tombol tambah |

## Slots

| Nama   | Payload                                  | Fungsi             |
| ------ | ---------------------------------------- | ------------------ |
| `item` | `{ item: { id: string, name: string } }` | Custom render opsi |
