---
title: Modal
---

<script setup>
import { ref } from 'vue'
import Modal from '../../src/components/modal/Modal.vue'
import Button from '../../src/components/button/Button.vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
</script>

# Modal

Modal adalah komponen yang digunakan untuk menampilkan popup yang muncul dan menutupi halaman.

## Contoh

Modal muncul ketika model `visible` bernilai `true`.

```vue{10-12}
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <Button @click="visible = true">Buka modal</Button>

    <Modal v-model:visible="visible">
        Konten modal
    </Modal>
</template>
```

::: raw
<Button @click="visible1 = true">Buka modal</Button>

<Modal v-model:visible="visible1">
    Konten modal
</Modal>
:::

## Mengatur Ukuran Modal

Untuk mengatur ukuran modal, tambahkan props `maxScreen` pada container di dalam modal. Untuk menambahkan props container di dalam modal, tambahkan di dalam props `container-props`. [Daftar max screen container](/components/container.html#custom-max-screen).

Contoh:

```vue{11}
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <Button @click="visible = true">Buka modal</Button>

    <Modal
        :container-props="{ maxScreen: 'sm' }"
        v-model:visible="visible"
    >
        Konten modal
    </Modal>
</template>
```

::: raw
<Button @click="visible2 = true">Buka modal</Button>

<Modal :container-props="{ maxScreen: 'sm' }" v-model:visible="visible2">
    Konten modal
</Modal>
:::

## Mengatur Posisi Modal

Untuk membuat modal berada di tengah secara vertikal, tambahkan props `vertical-align` dengan nilai `center`.

Contoh:

```vue{11}
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <Button @click="visible = true">Buka modal</Button>

    <Modal
        vertical-align="center"
        :container-props="{ maxScreen: 'sm' }"
        v-model:visible="visible"
    >
        Konten modal
    </Modal>
</template>
```

::: raw
<Button @click="visible3 = true">Buka modal</Button>

<Modal :container-props="{ maxScreen: 'sm' }" vertical-align="center" v-model:visible="visible3">
    Konten modal
</Modal>
:::

## Menambahkan Judul dan Tombol Close

Untuk menambahkan judul dan tombol close, tambahkan props `title` berisi teks judulnya, otomatis tombol close akan muncul.

Contoh:

```vue{11}
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <Button @click="visible = true">Buka modal</Button>

    <Modal
        title="Judul Modal"
        :container-props="{ maxScreen: 'sm' }"
        v-model:visible="visible"
    >
        Konten modal
    </Modal>
</template>
```

::: raw
<Button @click="visible4 = true">Buka modal</Button>

<Modal title="Judul Modal" :container-props="{ maxScreen: 'sm' }" vertical-align="center" v-model:visible="visible4">
    Konten modal
</Modal>
:::

## Kustomisasi

Ada tiga kustomisasi yang bisa dilakukan:

1. Props `with-container`, untuk menonaktifkan container di dalam modal.
2. Props `container-props`, untuk mengirimkan custom props ke container.
3. Props `card-props`, untuk mengirimkan custom props ke card.
4. Props `custom-class`, untuk menambahkan class ke elemen di dalam modal, bentuknya objek, propertinya `card` untuk menambahkan class ke card..

## Props

| Nama              | Type                    | Wajib? | Default | Fungsi                                                |
| ----------------- | ----------------------- | ------ | ------- | ----------------------------------------------------- |
| `title`           | `string`                | :x:    | `''`    | Judul modal dan menambilkan tombol close              |
| `vertical-align`  | `enum('top', 'center')` | :x:    | `''`    | Posisi modal secara vertikal                          |
| `with-container`  | `boolean`               | :x:    | `true`  | Menambahkan container di dalam modal                  |
| `container-props` | `object`                | :x:    | `{}`    | Objek yang akan diteruskan sebagai props ke container |
| `card-props`      | `object`                | :x:    | `{}`    | Objek yang akan diteruskan sebagai props ke card      |
| `custom-class`    | `{ card: string }`      | :x:    | `{}`    | Custom class ke `card`                                |

## Models

| Nama      | Type      | Fungsi            |
| --------- | --------- | ----------------- |
| `visible` | `boolean` | Memunculkan modal |

## Events

| Nama     | Payload | Kapan                |
| -------- | ------- | -------------------- |
| `opened` | -       | Ketika modal dibuka  |
| `closed` | -       | Ketika modal ditutup |

## Slots

| Nama      | Payload | Fungsi       |
| --------- | ------- | ------------ |
| `default` | `''`    | Konten modal |
