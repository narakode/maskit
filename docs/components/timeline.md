---
title: Timeline
---

<script setup>
import Timeline from '../../src/components/timeline/Timeline.vue'
</script>

# Timeline

Timeline adalah komponen untuk menampilkan daftar berurutan berisi waktu dan nama.

## Contoh

Daftar timeline dimasukkan ke props `items` dalam bentuk array. Itemnya objek dengan properti:

- `id`: identifier
- `time`: waktu
- `name`: judul
- `text`: keterangan

```vue
<template>
  <Timeline
    :items="[
      {
        id: 5,
        name: 'Pesanan diterima',
        text: 'Paket telah diterima di alamat tujuan',
        time: '2025-11-18 13:15:07',
      },
      {
        id: 4,
        name: 'Kurir menuju lokasi',
        text: 'Kurir sedang menuju alamatmu',
        time: '2025-11-18 12:34:42',
      },
      {
        id: 3,
        name: 'Pesanan dikirim',
        text: 'Paket telah diserahkan ke kurir',
        time: '2025-11-18 11:30:55',
      },
      {
        id: 2,
        name: 'Sedang dipacking',
        text: 'Tim gudang sedang menyiapkan pesananmu',
        time: '2025-11-18 10:45:20',
      },
      {
        id: 1,
        name: 'Pesanan dibuat',
        text: 'Pesananmu sudah kami terima dan sedang diproses',
        time: '2025-11-18 10:12:03',
      },
    ]"
  />
</template>
```

::: raw

<div class="bg-white p-6">
<Timeline
:items="[
{ 
id: 5, 
name: 'Pesanan diterima', 
text: 'Paket telah diterima di alamat tujuan', 
time: '2025-11-18 13:15:07' 
},
{ 
id: 4, 
name: 'Kurir menuju lokasi', 
text: 'Kurir sedang menuju alamatmu', 
time: '2025-11-18 12:34:42' 
},
{ 
id: 3, 
name: 'Pesanan dikirim', 
text: 'Paket telah diserahkan ke kurir', 
time: '2025-11-18 11:30:55' 
},
{ 
id: 2, 
name: 'Sedang dipacking', 
text: 'Tim gudang sedang menyiapkan pesananmu', 
time: '2025-11-18 10:45:20' 
},
{ 
id: 1, 
name: 'Pesanan dibuat', 
text: 'Pesananmu sudah kami terima dan sedang diproses', 
time: '2025-11-18 10:12:03' 
}
]"/>
</div>
:::

## Props

| Nama    | Type                                                         | Wajib? | Default | Fungsi        |
| ------- | ------------------------------------------------------------ | ------ | ------- | ------------- |
| `items` | `{ id: string, time: string, name: string, text: string }[]` | :x:    | `[]`    | Data timeline |
