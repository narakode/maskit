---
title: Section
---

<script setup>
import Section from '../../src/components/section/Section.vue'
import Button from '../../src/components/button/Button.vue'
</script>

# Section

Section adalah komponen yang bisa digunakan untuk menampilkan bagian tertentu dari website. Section terdiri dari header, action dan konten.

## Contoh

Section dapat berisi header, action dan konten.

```vue
<template>
  <Section title="Some Section" title-icon="tabler:rocket">
    <template #action>
      <Button>Action</Button>
    </template>

    <p class="text-gray-900">Section content</p>
  </Section>
</template>
```

::: raw

<Section
title="Some Section"
title-icon="tabler:rocket"
class="bg-white"
>
<template #action>
<Button>Action</Button>
</template>

<p class="text-gray-900">Section content</p>
</Section>
:::

## Menonaktifkan Padding Vertikal

Padding vertikal bisa dinonaktifkan dengan menambahkan props `has-vertical-padding` bernilai `false`.

```vue{3}
<template>
    <Section
    :has-vertical-padding="false"
        title="Some Section"
        title-icon="tabler:rocket"
    >
        <template #action>
            <Button>Action</Button>
        </template>

        <p class="text-gray-900">Section content</p>
    </Section>
</template>
```

::: raw

<Section
:has-vertical-padding="false"
title="Some Section"
title-icon="tabler:rocket"
class="bg-white"
>
<template #action>
<Button>Action</Button>
</template>

<p class="text-gray-900">Section content</p>
</Section>
:::

## Menonaktifkan Container

Container bisa dinonaktifkan dengan menambahkan props `with-container` bernilai `false`.

```vue{3}
<template>
    <Section
    :with-container="false"
    :has-vertical-padding="false"
        title="Some Section"
        title-icon="tabler:rocket"
    >
        <template #action>
            <Button>Action</Button>
        </template>

        <p class="text-gray-900">Section content</p>
    </Section>
</template>
```

::: raw

<Section
:with-container="false"
:has-vertical-padding="false"
title="Some Section"
title-icon="tabler:rocket"
class="bg-white"
>
<template #action>
<Button>Action</Button>
</template>

<p class="text-gray-900">Section content</p>
</Section>
:::

## Props

| Nama                   | Type      | Wajib? | Default   | Fungsi                          |
| ---------------------- | --------- | ------ | --------- | ------------------------------- |
| `tag`                  | `string`  | :x:    | `section` | Tag section                     |
| `title`                | `string`  | :x:    | `''`      | Judul section                   |
| `title-icon`           | `string`  | :x:    | `''`      | Menampilkan icon sebelum judul  |
| `title-level`          | `number`  | :x:    | `2`       | Level judul                     |
| `has-vertical-padding` | `boolean` | :x:    | `true`    | Ada padding vertikal di section |
| `with-container`       | `boolean` | :x:    | `true`    | Ada container di dalam section  |
| `container-props`      | `{}`      | :x:    | `{}`      | Custom props container          |
| `responsive-header`    | `boolean` | :x:    | `true`    | Section responsive              |

## Slots

| Nama      | Payload | Fungsi                             |
| --------- | ------- | ---------------------------------- |
| `action`  | `null`  | Menampilkan konten di ujung header |
| `default` | ``      | Konten section                     |
